var btnChecked = {
  btncheckEdu: false,
  btncheckExp: false,
  btncheckSki: false,
  btncheckPro: false,
};
var sectToBtn = {
  educationSect: "btncheckEdu",
  experienceSect: "btncheckExp",
  skillsSect: "btncheckSki",
  projectsSect: "btncheckPro",
};

function resumeCheck(clickedBtnName) {
  btnChecked[clickedBtnName] =
    btnChecked[clickedBtnName] === true ? false : true;

  /* Iterate through each section */
  Object.keys(sectToBtn).forEach(function (resumeSect) {
    // get the corresponding section
    var sect = document.getElementById(resumeSect);
    // show when checked, hide when unchecked
    sect.style.display =
      btnChecked[sectToBtn[resumeSect]] === true ? "block" : "none";
  });
}
