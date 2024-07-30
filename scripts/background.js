// Vars
const HOME_URL = "https://www.google.com/"; 
const BANNED_URLS = ["youtube", "instagram"] 

// Listener
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => siteBlocker(tabId, changeInfo, tab));

// Evaluates current tab's url; redirects away from certain URLs 
async function siteBlocker(tabId, changeInfo, tab){
    if (!tab){
        console.log("There ain't no tab here.")
        return; 
    }

    try {
        let currUrl = tab.url; 
        if (BANNED_URLS.some(url => currUrl.toLowerCase().includes(url))){
            chrome.tabs.update(tabId, { url: HOME_URL }); 
        }
    } catch (err) {
        console.log("Thrown in onUpdated try/cetch. Error: %s", err)
    }
}
