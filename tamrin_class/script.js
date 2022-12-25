function pageLoadInTime() {
  setTimeout(myMassege, 3000);
  function myMassege() {
    document.querySelector(".wrapper").style.display = "flex";
  }
}
function closeMassage() {
  document.querySelector(".wrapper").style.display = "none";
}
