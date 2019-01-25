function displayHome() {
  var x = document.getElementById("home");
  x.style.display = "flex";
  hideTabs();
}

function openTab(tab) {

  hideHome();
  hideTabs();
  var x = document.getElementById(tab);
  x.style.display="block";

}

function hideTabs() {
  var x = document.getElementsByClassName("tab-content");
  for(var i = 0; i < x.length; i++) {
    x[i].style.display="none";
  }
}
function hideHome() {
  var x = document.getElementById("home");
  x.style.display = "none";
}
