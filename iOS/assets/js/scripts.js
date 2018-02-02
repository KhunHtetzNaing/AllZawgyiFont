$(document).ready(function()
{

	$(".dwnBtn").click(function () {
	    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
	    /*
	    if (isSafari) {
	        alert("You are using Safari!");
	    }
	    */
	    if (!isSafari) {
        	alert("Open in Safari!");
	    }
	});

});