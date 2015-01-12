

function promptBox() {
  console.log("You clicked here");

 chrome.tabs.executeScript({
	 //minified using http://jscompress.com
    code: '(function(){function i(e){winpops=window.open("","test","fullscreen=no,toolbar=yes,status=yes, "+"menubar=yes,scrollbars=yes,resizable=yes,directories=yes,location=yes, "+"width=500,height=400,left=100,top=100,screenX=100,screenY=100");winpops.document.write(e);return winpops}function u(){o.getElementsByClassName("uiScrollableAreaWrap scrollable")[0].scrollTop=9999999;var e="wait.... scrolling ";s.document.write("<p>"+e+"</p>");console.log(e);r++}function a(){console.log("Sending requests started");var e=document.getElementsByClassName("_5l6a")[0];divs=e.getElementsByClassName("_42ef");length=divs.length;console.log(String(length/2)+" captured");var t=0;for(var n=2;n<length;n=n+2){try{divs[n].getElementsByTagName("button")[0].click();var r="Sent to "+divs[n].getElementsByTagName("strong")[0].innerText+" count "+String(n/2);s.document.write("<p>"+r+"</p>");console.log(r);t++}catch(i){console.log(i);continue}}console.log(String(t)+" Sent without errors")}var t=15;var n=2e3;var r=0;var s=i("<title>Progress</title><h1>Thank you for using our Extension</h1>");var o=document.getElementsByClassName("_5tee")[0];for(var f=1;f<t;f++){setTimeout(function(){u(f)},n*f)}setTimeout(function(){a()},n*(t+2))})();'
  });
}


document.getElementById("clickButton").addEventListener("click", function(){
    document.getElementById("main").innerHTML = "Sending began";
	promptBox();
});


