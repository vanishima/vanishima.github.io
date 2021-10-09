// alert("Alert Test");

var contentStr = ["resumeSect", "deskSect", "contactsSect"];

// show ONLY the content toShow, hide all other contents
function navClick(toShow) {
    contentStr.forEach(function (name) {
        // get div element
        var content = document.getElementById(name);
        if (name == toShow) {
            content.style.display = "block"; // show only this
        } else {
            content.style.display = "none"; // hide all others
        }
    });

    // if contacts Div is selected, change background image
    if (toShow == "contactsSect") {
        document.body.style.backgroundImage =
            "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0 100%), url(\"/images/background/home-page-1.jpg\")";
    }
}
