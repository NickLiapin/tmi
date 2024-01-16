// Event listener for DOMContentLoaded event to ensure the DOM is fully loaded before executing the script.
document.addEventListener('DOMContentLoaded', function () {
    // Getting references to various elements in the popup's HTML.
    const menuEditor = document.getElementById('menuEditor');
    const saveButton = document.getElementById('saveButton');
    const exportButton = document.getElementById('exportButton');
    const importButton = document.getElementById('importButton');
    const importInput = document.getElementById('importInput');

    // Event listener for exporting menu data to a JSON file.
    exportButton.addEventListener('click', function () {
        // Retrieve menu data from local storage.
        chrome.storage.local.get('menuData', function (result) {
            if (result.menuData) {
                // Convert menu data to a formatted JSON string.
                const json = JSON.stringify(result.menuData, null, 4);
                // Create a new Blob with the JSON data.
                const blob = new Blob([json], {type: 'application/json'});
                // Create a URL for the Blob.
                const url = URL.createObjectURL(blob);
                // Trigger download of the JSON file.
                chrome.downloads.download({
                    url: url,
                    filename: 'menuData.json'
                });
            }
        });
    });

    // Event listener for importing menu data from a JSON file.
    importButton.addEventListener('click', function () {
        // Trigger file input click to open file dialog.
        importInput.click();
    });

    importInput.addEventListener('change', function (event) {
        // File reader to read the contents of the selected file.
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
            try {
                // Parse the JSON content from the file.
                const importedMenuData = JSON.parse(e.target.result);
                // Save the imported data to local storage.
                chrome.storage.local.set({menuData: importedMenuData}, function () {
                    console.log('Menu imported');
                    // Update the menu editor interface.
                    menuEditor.innerHTML = '';
                    buildMenuEditor(importedMenuData.children, menuEditor, 0);
                    // Update the context menu.
                    chrome.runtime.sendMessage({action: "updateContextMenu"});
                });
            } catch (e) {
                // Log error if JSON parsing fails.
                console.error('Error importing JSON', e);
            }
        };
        // Read the selected file as text.
        fileReader.readAsText(event.target.files[0]);
    });

    // Function to load and display menu data.
    function loadMenuData() {
        chrome.storage.local.get('menuData', function (result) {
            if (result.menuData) {
                // Build the menu editor interface with the loaded data.
                buildMenuEditor(result.menuData.children, menuEditor, 0);
            }
        });
    }

    // Recursive function to build the menu editor interface.
    function buildMenuEditor(menuItems, parentElement, depth) {
        // Iterate over each menu item.
        menuItems.forEach(item => {
            // Create a container for the menu item.
            const container = document.createElement('div');
            container.className = 'menu-item';
            // Indentation for nested items.
            container.style.marginLeft = `${depth * 20}px`;

            // Create an input field for the menu item title.
            const titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.value = item.title;
            titleInput.dataset.id = item.id;
            titleInput.className = 'menu-title';
            container.appendChild(titleInput);

            // If the item has no children, add a textarea for its content.
            if (!item.children || item.children.length === 0) {
                const textarea = document.createElement('textarea');
                textarea.value = item.content;
                textarea.dataset.id = item.id; // Saving ID for updates
                container.appendChild(textarea);
            }
            parentElement.appendChild(container);

            // Recursively build editor for child menu items, if any
            if (item.children && item.children.length > 0) {
                buildMenuEditor(item.children, container, depth + 1);
            }
        });
    }

// Function to update the title of a menu item by its ID
    function updateMenuTitle(menuItems, id, newTitle) {
        menuItems.forEach(item => {
            if (item.id === id) {
                item.title = newTitle;
            }
            // Recursively update child items
            if (item.children && item.children.length > 0) {
                updateMenuTitle(item.children, id, newTitle);
            }
        });
    }

// Function to update the content of a menu item by its ID
    function updateMenuContent(menuItems, id, newContent) {
        menuItems.forEach(item => {
            if (item.id === id) {
                item.content = newContent;
            }
            // Recursively update child items
            if (item.children && item.children.length > 0) {
                updateMenuContent(item.children, id, newContent);
            }
        });
    }

// Load menu data on popup initialization
    loadMenuData();

// Save updated data when save button is clicked
    saveButton.addEventListener('click', function () {
        chrome.storage.local.get('menuData', function (result) {
            const titleInputs = document.querySelectorAll('.menu-item .menu-title');
            const textareas = document.querySelectorAll('.menu-item textarea');

            // Update titles and contents of each menu item based on user input
            titleInputs.forEach(input => {
                updateMenuTitle(result.menuData.children, input.dataset.id, input.value);
            });

            textareas.forEach(textarea => {
                updateMenuContent(result.menuData.children, textarea.dataset.id, textarea.value);
            });

            // Save the updated menu data to local storage
            chrome.storage.local.set({menuData: result.menuData}, function () {
                console.log('Menu updated');
                // Update the context menu to reflect changes
                chrome.runtime.sendMessage({action: "updateContextMenu"});
            });
        });
    });

});
