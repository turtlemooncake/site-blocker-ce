
// Event Listener to tab update
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     siteBlocker(tabId, changeInfo, tab)
// });
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => siteBlocker(tabId, changeInfo, tab));
const HOME_URL = "https://www.google.com/"; 
const BANNED_URLS = ["youtube", "instagram"] 

// Evaluates current tab's url; redirects away from certain URLs 
async function siteBlocker(tabId, changeInfo, tab){
    if (!tab){
        console.log("There ain't no tab here.")
        return; 
    }

    try {
        let currUrl = tab.url; 
        if (BANNED_URLS.some(url => currUrl.toLowerCase().includes(url))){
            chrome.tabs.update(tabId, { url: HOME_URL }); // or undefined instead of tab id; we'll double check
        }
    } catch (err) {
        console.log("Thrown in onUpdated try/cetch. Error: %s", err)
    }
}


// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     console.log("tab updated");
//     console.log(tab); 

//     if (!tab){
//         console.log("There ain't no tab here.")
//         return; 
//     }

//     try {
//         let currUrl = tab.url; 
//         console.log("try catch")
//         let newUrl = "https://www.google.com/"; 
//         console.log("this is the curr url %s", currUrl)
//         if (currUrl.toLowerCase().includes("youtube")){
//             console.log("made it to comparison")
//             chrome.tabs.update(tab.id, { url: newUrl }); // or undefined instead of tab id; we'll double check
//         }
//     } catch (err) {

//     }
// })


// if (substrings.some(v => str.includes(v))) {
//     // There's at least one in the array that satisfies 
// }

// function evaluateCurrUrl(currUrl) {
//     BANNED_URLS.forEach(function(c) {
//         console.log(c);
//     });
// }

//chrome.tabs.onActivated.addListener(getCurrentTab());
// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);
//     let currUrl = "https://www.google.com"
//     try {
//         currUrl = tab[0].url
//     } catch (error) {
//         console.log("Error in getting current tab: %s", error)
//     }
//     return tab;
//   }


// chrome.tabs.onCreated.addListener(function(tab) {
//     console.log("tab created");
//     console.log(tab); 
// })

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     console.log("tab updated");
//     console.log(tab); 

//     if (!tab){
//         console.log("There ain't no tab here.")
//         return; 
//     }

//     try {
//         let currUrl = tab.url; 
//         console.log("try catch")
//         let newUrl = "https://www.google.com/"; 
//         console.log("this is the curr url %s", currUrl)
//         if (currUrl.toLowerCase().includes("youtube")){
//             console.log("made it to comparison")
//             chrome.tabs.update(tab.id, { url: newUrl }); // or undefined instead of tab id; we'll double check
//         }
//     } catch (err) {

//     }
// })


