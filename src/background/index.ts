// @ts-ignore
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveInput") {
    const { key, value } = request;

    // Retrieve existing entries for the key, add the new value if it's unique
    // @ts-ignore
    chrome.storage.local.get([key], (result) => {
      const existingValues = result[key] || [];
      if (!existingValues.includes(value)) {
        existingValues.push(value);
        // @ts-ignore
        chrome.storage.local.set({ [key]: existingValues });
      }
    });
  } else if (request.action === "getSuggestions") {
    const { key } = request;

    // Get suggestions for the current input field
    // @ts-ignore
    chrome.storage.local.get([key], (result) => {
      sendResponse({ suggestions: result[key] || [] });
    });
    return true; // Keep the message channel open for asynchronous response
  }
});