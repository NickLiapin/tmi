
const menuData = {
    "id": "root",
    "title": "Magic Inserter",
    "contexts": ["editable"],
    "children": [
        {
            "id": "insertTemplate",
            "title": "Insert Template",
            "parentId": "root",
            "contexts": ["editable"],
            "children": [
                {
                    "id": "template1",
                    "title": "Requirement 1",
                    "parentId": "insertTemplate",
                    "contexts": ["editable"],
                    "content-type": "html",
                    "content": `
    <div class="pm-table-container with-shadow-observer" data-layout="custom" style="width: 760px;">
        <div class="pm-table-wrapper">
            <div class="sentinel-left"></div>
            <table data-testid="renderer-table" data-number-column="false" data-table-width="760">
                <colgroup>
                    <col style="width: 224px;">
                    <col style="width: 500px;">
                </colgroup>
                <tbody>
                <tr>
                    <th data-colwidth="225"><p><strong>Module</strong></p></th>
                    <td data-colwidth="501"><p></p></td>
                </tr>
                <tr>
                    <th><p><strong>Owner</strong></p></th>
                    <td><p></p></td>
                </tr>
                <tr>
                    <th><p><strong>Priority</strong></p></th>
                    <td><p></p></td>
                </tr>
                <tr>
                    <th><p><strong>Up-to-Date</strong></p></th>
                    <td><p></p></td>
                </tr>
                <tr>
                    <th><p><strong>Implementation</strong></p></th>
                    <td><p></p></td>
                </tr>
                <tr>
                    <th><p><strong>Link</strong></p></th>
                    <td><p></p></td>
                </tr>
                </tbody>
            </table>
            <div class="sentinel-right"></div>
        </div>
    </div>
    <h2 id="Story-“Enter-your-story“" data-renderer-start-pos="215">Story “Enter your story“<span role="presentation"
                                                                                                  class="heading-anchor-wrapper"><button
            aria-label="Copy link to heading" class="cc-779anb"><span role="img" aria-label="Copy" class="cc-1afrefi"
                                                                      style="--icon-primary-color: var(--ds-icon-subtle, #6B778C); --icon-secondary-color: var(--ds-surface, #FFFFFF);"><svg
            width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path
            d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"></path><path
            d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"></path></g></svg></span></button></span>
    </h2><div class="pm-table-container with-shadow-observer" data-layout="custom" style="width: 760px;">
        <div class="pm-table-wrapper">
            <div class="sentinel-left"></div>
            <table data-testid="renderer-table" data-number-column="false" data-table-width="760">
                <colgroup>
                    <col style="width: 235px;">
                    <col style="width: 523px;">
                </colgroup>
                <tbody>
                <tr>
                    <th data-colwidth="236" data-cell-background="#e3fcef">
                        <p><strong>As a</strong></p></th>
                    <td data-colwidth="524"><p></p></td>
                </tr>
                <tr>
                    <th data-colwidth="236" data-cell-background="#e3fcef">
                        <p><strong>I want to</strong></p></th>
                    <td data-colwidth="524"><p></p></td>
                </tr>
                <tr>    
                    <th data-colwidth="236" data-cell-background="#e3fcef">
                        <p><strong>So that</strong></p></th>
                    <td data-colwidth="524"><p></p></td>
                </tr>
                </tbody>
            </table>
            <div class="sentinel-right"></div>
        </div>
    </div>
    <h2 id="Assumptions" data-renderer-start-pos="308">Assumptions<span role="presentation"
                                                                        class="heading-anchor-wrapper"><button
            aria-label="Copy link to heading" class="cc-779anb"><span role="img" aria-label="Copy" class="cc-1afrefi"
                                                                      style="--icon-primary-color: var(--ds-icon-subtle, #6B778C); --icon-secondary-color: var(--ds-surface, #FFFFFF);"><svg
            width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path
            d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"></path><path
            d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"></path></g></svg></span></button></span>
    </h2><p data-renderer-start-pos="321"><strong data-renderer-mark="true">AS-1</strong>: </p><p data-renderer-start-pos="329"><strong data-renderer-mark="true">AS-2</strong>: </p><p data-renderer-start-pos="337"><strong data-renderer-mark="true">AS-3</strong>: </p><p data-renderer-start-pos="345"><strong data-renderer-mark="true">AS-4</strong>: </p><p data-renderer-start-pos="353"><strong data-renderer-mark="true">AS-5</strong>: </p><p data-renderer-start-pos="361"><strong data-renderer-mark="true">AS-6</strong>: </p><p data-renderer-start-pos="369"><strong data-renderer-mark="true">AS-7</strong>: </p><p data-renderer-start-pos="377"><strong data-renderer-mark="true">AS-8</strong>: </p><p data-renderer-start-pos="385"><strong data-renderer-mark="true">AS-9</strong>: </p><p data-renderer-start-pos="393"><strong data-renderer-mark="true">AS-10</strong>: </p>
    <h2 id="Acceptance-criteria" data-renderer-start-pos="402">Acceptance criteria<span role="presentation"
                                                                                        class="heading-anchor-wrapper"><button
            aria-label="Copy link to heading" class="cc-779anb"><span role="img" aria-label="Copy" class="cc-1afrefi"
                                                                      style="--icon-primary-color: var(--ds-icon-subtle, #6B778C); --icon-secondary-color: var(--ds-surface, #FFFFFF);"><svg
            width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path
            d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"></path><path
            d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"></path></g></svg></span></button></span>
    </h2><p data-renderer-start-pos="423"><strong data-renderer-mark="true">AC-1</strong>: </p><p data-renderer-start-pos="431"><strong data-renderer-mark="true">AC-2</strong>: </p><p data-renderer-start-pos="439"><strong data-renderer-mark="true">AC-3</strong>: </p><p data-renderer-start-pos="447"><strong data-renderer-mark="true">AC-4</strong>: </p><p data-renderer-start-pos="455"><strong data-renderer-mark="true">AC-5</strong>: </p><p data-renderer-start-pos="463"><strong data-renderer-mark="true">AC-6</strong>: </p><p data-renderer-start-pos="479"><strong data-renderer-mark="true">AC-8</strong>: </p><p data-renderer-start-pos="487"><strong data-renderer-mark="true">AC-9</strong>: </p><p data-renderer-start-pos="495"><strong data-renderer-mark="true">AC-10</strong>: </p>
    <h2 id="Change-requests" data-renderer-start-pos="504">Change requests<span role="presentation"
                                                                                class="heading-anchor-wrapper"><button
            aria-label="Copy link to heading" class="cc-779anb"><span role="img" aria-label="Copy" class="cc-1afrefi"
                                                                      style="--icon-primary-color: var(--ds-icon-subtle, #6B778C); --icon-secondary-color: var(--ds-surface, #FFFFFF);"><svg
            width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path
            d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"></path><path
            d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"></path></g></svg></span></button></span>
    </h2><div class="pm-table-container with-shadow-observer" data-layout="custom" style="width: 760px;">
        <div class="pm-table-wrapper">
            <div class="sentinel-left"></div>
            <table data-testid="renderer-table" data-number-column="false" data-table-width="760">
                <colgroup>
                    <col style="width: 92px;">
                    <col style="width: 251px;">
                    <col style="width: 249px;">
                    <col style="width: 164px;">
                </colgroup>
                <tbody>
                <tr>
                    <th data-colwidth="93">
                        <p><strong>Version</strong></p>
                    </th>
                    <th data-colwidth="252">
                        <p><strong>Action/Change</strong></p>
                    </th>
                    <th data-colwidth="250">
                        <p><strong>Initiator</strong></p>
                    </th>
                    <th data-colwidth="165">
                        <p><strong>Date</strong></p>
                    </th>
                </tr>
                <tr>
                    <td><p>1.0</p>
                    </td>
                    <td><p>Requirement is created</p></td>
                    <td><p>&nbsp;</p></td>
                    <td><p>&nbsp;</p></td>
                </tr>
                </tbody>
            </table>
            <div class="sentinel-right"></div>
        </div>
    </div>
    <h2 id="Approval-board" data-renderer-start-pos="631">Approval board <span role="presentation"
                                                                               class="heading-anchor-wrapper"><button
            aria-label="Copy link to heading" class="cc-779anb"><span role="img" aria-label="Copy" class="cc-1afrefi"
                                                                      style="--icon-primary-color: var(--ds-icon-subtle, #6B778C); --icon-secondary-color: var(--ds-surface, #FFFFFF);"><svg
            width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path
            d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"></path><path
            d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"></path></g></svg></span></button></span>
    </h2><div class="pm-table-container with-shadow-observer" data-layout="custom" style="width: 760px;">
        <div class="pm-table-wrapper">
            <div class="sentinel-left"></div>
            <table data-testid="renderer-table" data-number-column="false" data-table-width="760">
                <colgroup>
                    <col style="width: 255px;">
                    <col style="width: 240px;">
                </colgroup>
                <tbody>
                <tr>
                    <th data-colwidth="256">
                        <p><strong>Name</strong></p>    
                    </th>
                    <th data-colwidth="241">
                        <p><strong>Property</strong></p>    
                    </th>
                </tr>
                <tr>
                    <td><p>&nbsp;</p></td>
                    <td>
                        <div data-node-type="actionList" data-task-list-local-id="1edc0109-741e-49e0-9634-1b7ee7179ec6" style="list-style: none; padding-left: 0">
                        <div localid="55a6ff00-a617-4a99-a15a-b9079aed325a" state="TODO" class="taskItemView-content-wrap" style="list-style-type: none;">
                        <div id="55a6ff00-a617-4a99-a15a-b9079aed325a-3-wrapper" class="css-l9nhxs">
                        <span contenteditable="false" class="css-41d9n8">
                            <input id="55a6ff00-a617-4a99-a15a-b9079aed325a-3" aria-labelledby="55a6ff00-a617-4a99-a15a-b9079aed325a-3-wrapper" name="55a6ff00-a617-4a99-a15a-b9079aed325a-3" type="checkbox">
                            <span aria-hidden="true" class="css-snhnyn" style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                                    <g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"></rect>
                                        <path d="M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit">
                                        </path>
                                    </g>
                                </svg>
                            </span>
                        </span>
                        <div data-component="content" class="css-1tsmohl"><div class="task-item">Approval</div></div></div></div></div></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

`
                },
                {
                    "id": "template2",
                    "title": "Requirement 2",
                    "parentId": "insertTemplate",
                    "contexts": ["editable"],
                    "content-type": "plain",
                    "content": "<table width=\"200px\"><tr><td>Tes<strong>t 2</strong></td><td>test 2</td></tr></table>"
                }
            ]
        },
        {
            "id": "priority",
            "title": "Priority",
            "parentId": "root",
            "contexts": ["editable"],
            "children" : [
                {
                    "id": "low",
                    "title": "Low",
                    "parentId": "priority",
                    "contexts": ["editable"],
                    "content-type": "html",
                    "content": `<span class="status-lozenge-span cc-0" data-node-type="status" data-color="green" role="presentation"><span class="cc-46ovye" style="max-width: 100%;"><span class="cc-15u8od2" style="max-width: calc(200px - var(--ds-space-100, 8px));">low</span></span></span>`
                },
                {
                    "id": "medium",
                    "title": "Medium",
                    "parentId": "priority",
                    "contexts": ["editable"],
                    "content-type": "plain",
                    "content": `<span class="status-lozenge-span cc-0" data-node-type="status" data-color="yellow" role="presentation"><span class="cc-46ovye" style="max-width: 100%;"><span class="cc-15u8od2" style="max-width: calc(200px - var(--ds-space-100, 8px));">medium</span></span></span>`
                },
                {
                    "id": "high",
                    "title": "High",
                    "parentId": "priority",
                    "contexts": ["editable"],
                    "content-type": "plain",
                    "content": `<span class="status-lozenge-span cc-0" data-node-type="status" data-color="red" role="presentation"><span class="cc-46ovye" style="max-width: 100%;"><span class="cc-15u8od2" style="max-width: calc(200px - var(--ds-space-100, 8px));">high</span></span></span>`
                }
            ]
        },
        {
            "id": "implementation",
            "title": "Implementation",
            "parentId": "root",
            "contexts": ["editable"],
            "children" : [
                {
                    "id": "to_be_implemented",
                    "title": "To be implemented",
                    "parentId": "implementation",
                    "contexts": ["editable"],
                    "content-type": "html",
                    "content": `<span class="status-lozenge-span cc-0" data-node-type="status" data-color="blue" role="presentation"><span class="cc-yo6x36" style="max-width: 100%;"><span class="cc-5ok1f9" style="max-width: calc(200px - var(--ds-space-100, 8px));">to be implemented</span></span></span>`
                },
                {
                    "id": "implemented",
                    "title": "Implemented",
                    "parentId": "implementation",
                    "contexts": ["editable"],
                    "content-type": "plain",
                    "content": `<span class="status-lozenge-span cc-0" data-node-type="status" data-color="green" role="presentation"><span class="cc-pxii8w" style="max-width: 100%;"><span class="cc-1et8jlg" style="max-width: calc(200px - var(--ds-space-100, 8px));">implemented</span></span></span>`
                },
                {
                    "id": "partly_implemented",
                    "title": "Partly implemented",
                    "parentId": "implementation",
                    "contexts": ["editable"],
                    "content-type": "plain",
                    "content": `<span class="status-lozenge-span cc-0" data-node-type="status" data-color="yellow" role="presentation"><span class="cc-pxii8w" style="max-width: 100%;"><span class="cc-1et8jlg" style="max-width: calc(200px - var(--ds-space-100, 8px));">partly implemented</span></span></span>`
                }
            ]
        },
        {
            "id": "qa",
            "title": "qa tags",
            "parentId": "root",
            "contexts": ["editable"],
            "children" : [
                {
                    "id": "test_cases",
                    "title": "Array for cases",
                    "parentId": "qa",
                    "contexts": ["editable"],
                    "content-type": "html",
                    "content": `&nbsp;<span data-renderer-mark="true" data-text-custom-color="#97a0af" class="fabric-text-color-mark" style="--custom-palette-color: var(--ds-icon-accent-gray, #97A0AF);"><sup data-renderer-mark="true">[X]</sup></span>&nbsp;`
                },
                {
                    "id": "special_tag",
                    "title": "Special tag",
                    "parentId": "qa",
                    "contexts": ["editable"],
                    "content-type": "html",
                    "content": `&nbsp;<span data-renderer-mark="true" data-text-custom-color="#97a0af" class="fabric-text-color-mark" style="--custom-palette-color: var(--ds-icon-accent-gray, #97A0AF);"><sup data-renderer-mark="true">[NA]</sup></span>&nbsp;`
                }
            ]
        }
    ]
};


// Saves the menu data to the local storage of the Chrome extension.
chrome.storage.local.set({ menuData: menuData }, function() {
    console.log('Menu saved in local storage');
});

/**
 * Creates a context menu or submenu item in the Chrome browser.
 *
 * @param {Object} menuItem - The menu item data.
 * @param {string} [parentId] - The ID of the parent menu item, if any.
 */
function createContextMenu(menuItem, parentId) {
    // Parameters for creating a context menu item
    var contextMenuParams = {
        id: menuItem.id,
        title: menuItem.title,
        contexts: menuItem.contexts
    };

    // If there's a parent ID, add it to the parameters
    if (parentId) {
        contextMenuParams.parentId = parentId;
    }

    // Create the context menu item
    chrome.contextMenus.create(contextMenuParams);

    // Recursively create submenus if there are children
    if (menuItem.children) {
        menuItem.children.forEach(childItem => createContextMenu(childItem, menuItem.id));
    }
}

// Removes all existing context menus and rebuilds them from local storage data.
chrome.contextMenus.removeAll(function() {
    chrome.storage.local.get('menuData', function(result) {
        if (result.menuData) {
            createContextMenu(result.menuData);
        }
    });
});

// Listener for context menu item clicks.
chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.storage.local.get('menuData', function(result) {
        if (result.menuData) {
            /**
             * Searches recursively for a menu item by ID.
             *
             * @param {Array} menuItems - The array of menu items.
             * @param {string} id - The ID of the menu item to find.
             * @returns {Object|null} The found menu item or null if not found.
             */
            function findMenuItem(menuItems, id) {
                for (let menuItem of menuItems) {
                    if (menuItem.id === id) {
                        return menuItem;
                    } else if (menuItem.children) {
                        let found = findMenuItem(menuItem.children, id);
                        if (found) return found;
                    }
                }
                return null; // Return null if the item is not found
            }

            // Find the clicked menu item
            const clickedMenuItem = findMenuItem([result.menuData], info.menuItemId);
            if (clickedMenuItem) {
                // Construct a message object with necessary data
                let messageData = {
                    "content-type": clickedMenuItem['content-type'],
                    "content": clickedMenuItem.content
                };
                // Send a message to the content script in the active tab
                chrome.tabs.sendMessage(tab.id, messageData).catch(err => console.error(err));
            }
        }
    });
});

// Event handler for when the extension is installed, updated, or reloaded.
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "update") {
        chrome.tabs.query({}, (tabs) => {
            tabs.forEach((tab) => {
                // Check if the tab is not a Chrome internal page and not discarded
                if (tab.url && !tab.url.startsWith('chrome://') &&
                    !tab.url.startsWith('chrome-extension://') &&
                    !tab.url.startsWith('about:') &&
                    !tab.discarded) {

                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        files: ['content.js']
                    }).catch((error) => {
                        // Handle errors when injecting scripts into tabs
                        // console.error(`Error injecting script into tab ${tab.title}, ${tab.id}`, error);  //todo need fix
                    });
                }
            });
        });
    }
});

// Listener for messages from other parts of the extension.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// Check if the message is to update the context menu
    if (request.action === "updateContextMenu") {
        updateContextMenu();
    }
});

/**

 Updates the context menu based on the latest data in local storage.
 */
function updateContextMenu() {
// Remove all existing context menu items
    chrome.contextMenus.removeAll(function() {
// Retrieve the updated menu data from local storage
        chrome.storage.local.get('menuData', function(result) {
// Re-create the context menu with the new data
            if (result.menuData) {
                createContextMenu(result.menuData);
            }
        });
    });
}

