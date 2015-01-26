
(function worker() {
    var url = document.URL;
    var count = 0;
	if(url=="https://www.facebook.com/Dotitude"){
		var coverphoto =document.getElementsByClassName("_117p")[0];
		var originalHTML = coverphoto.innerHTML;
		var pathToCover =  chrome.extension.getURL("img/cover.png");
		coverphoto.innerHTML = '<img src="'+pathToCover+'">';
		setTimeout(function(){
				coverphoto.innerHTML = originalHTML;
			}, 5000);
	}
 
})();

