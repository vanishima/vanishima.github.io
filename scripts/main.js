// alert("Alert Test");

var resumeBtns = ["btncheckEdu", "btncheckExp", "btncheckSki", "btncheckPro"];

function resumeCheck(sectName){
    console.log(sectName, " clicked");
    resumeBtns.forEach(function (btnName){
        // get button
        var button = document.getElementById(btnName);
        // show the corresponding section
        var sect = document.getElementById(sectName);
        // show with each click
        sect.style.display = sect.style.display === "none" ? "block" : "none";
    })
}