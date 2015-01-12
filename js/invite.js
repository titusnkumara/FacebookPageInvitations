
(function worker() {
    var url = document.URL;
    var count = 0;
	console.dir(url);
    //console.log(document.getElementById("main").innerText)
	if(url=="https://www.facebook.com/Dotitude"){
		console.log("found");
		var coverphoto =document.getElementsByClassName("_117p")[0];
		var originalHTML = coverphoto.innerHTML;
		var pathToCover =  chrome.extension.getURL("img/cover.png");
		console.log(pathToCover);
		coverphoto.innerHTML = '<img src="'+pathToCover+'">';
		setTimeout(function(){
				coverphoto.innerHTML = originalHTML;
			}, 5000);
	}
 
})();

