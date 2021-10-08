// alert("Alert Test");

var contentStr = ["resumeDiv", "deskDiv", "contactsDiv"];

// show ONLY the content toShow, hide all other contents
function navClick(toShow) {
	contentStr.forEach(function(name) {
		// get div element
		var content = document.getElementById(name);
		if (name == toShow){
			content.style.display = "block";	// show
		} else {
			content.style.display = "none";		// hide
		}
	});
}
