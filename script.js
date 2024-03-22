function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "#F8B595";
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.style.backgroundColor = "#FF7F50";
  evt.currentTarget.classList.add("active");
}

// Abre a primeira aba por padrão
document.getElementById("sobre").classList.add("active");
document.getElementsByClassName("tablinks")[0].style.backgroundColor = "#FF7F50";
document.getElementsByClassName("tablinks")[0].classList.add("active");
