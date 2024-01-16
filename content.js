// Listens for messages sent to the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Check if the message contains 'content' to be pasted
    if (message.content) {
        // Calls a function to paste the HTML content
        pasteHtmlType(message.content);
    }
});

/**
 * Pastes HTML content into the active element on the web page.
 * This function handles both plain text and rich text content.
 *
 * @param {string} html - The HTML content to be pasted.
 */
async function pasteHtmlType(html) {
    try {
        // Create a new Blob object with the HTML content
        const blob = new Blob([html], { type: 'text/html' });

        // Convert the Blob into a text string
        const message = await blob.text();

        // Check if the active element is a textarea or a text input field
        if (document.activeElement.tagName === "TEXTAREA" ||
            (document.activeElement.tagName === "INPUT" && document.activeElement.type === "text")) {
            // Append the text to the value of the active element
            document.activeElement.value += message;
        } else {
            // If the active element is not a text input, use execCommand to insert HTML
            document.execCommand("insertHtml", false, message);
        }
    } catch (err) {
        // Log an error if there's a problem with pasting content
        console.error('Error inserting content: ', err);
    }
}
