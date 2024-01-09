//Menu

document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
});

//Zoom på elementer ved og i porfoliosite
//Hjælp fra ChatGPT til korrekt opstilling

function zoomIn(element) {
  element.style.transform = "scale(1.1)";
}

function zoomOut(element) {
  element.style.transform = "scale(1)";
}
