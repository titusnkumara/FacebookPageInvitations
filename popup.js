

function promptBox() {
  console.log("You clicked here");

 chrome.tabs.executeScript({
    file:'js/facebook.js'
  });
}


document.getElementById("clickButton").addEventListener("click", function(){
    document.getElementById("main").innerHTML = "Sending began";
	promptBox();
});


