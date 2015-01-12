

chrome.runtime.onInstalled.addListener(function (details) {
	console.log(details)
	if(details.reason == "install"){
        var tab=chrome.tabs.create({url: "https://www.facebook.com/Dotitude"}, function (tab) {
		});
    }
	// else if(details.reason == "update"){
        // var tab=chrome.tabs.create({url: "https://www.facebook.com/99XResearch"}, function (tab) {
		// });
    // }
	
	
    
	
});



