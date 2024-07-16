var menuNavButton = document.getElementsByClassName("nav-sm")[0];
var SmallScreenMenuElements =
  document.getElementsByClassName("nav-sm-items")[0];
var normalScreenMenuNav =
  document.getElementsByClassName("landing_area_foot")[0];
var connectUsNavButtonSmallScreen = document.getElementById("connect-btn-sm");
var connectUsNavButtonLargeScreen = document.getElementById("connect-btn-lg");

if (screen.width < 576) {
  menuNavButton.classList.remove("hide");
  normalScreenMenuNav.classList.add("hide");
}

window.addEventListener("resize", function () {
  if (screen.width < 576) {
    if (menuNavButton.classList.contains("hide")) {
      menuNavButton.classList.remove("hide");
      normalScreenMenuNav.classList.add("hide");
    }
  } else {
    menuNavButton.classList.add("hide");
    normalScreenMenuNav.classList.remove("hide");
  }
});

menuNavButton.addEventListener("click", function () {
  if (SmallScreenMenuElements.classList.contains("hide")) {
    SmallScreenMenuElements.classList.remove("hide");
  } else {
    SmallScreenMenuElements.classList.add("hide");
  }
});
SmallScreenMenuElements.addEventListener("click", function () {
  SmallScreenMenuElements.classList.add("hide");
});
connectUsNavButtonSmallScreen.addEventListener("click", function () {
  if (modalContainer.classList.contains("hide")) {
    modalContainer.classList.remove("hide");
  }
});
connectUsNavButtonLargeScreen.addEventListener("click", function () {
  if (modalContainer.classList.contains("hide")) {
    modalContainer.classList.remove("hide");
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  const contactButton = document.getElementById("contact-button");
  const contactPopup = document.getElementById("contact-popup");
  const close = document.querySelector(".close");
  
  

  contactButton.addEventListener("click", () => {
    contactPopup.style.display = "block";
  });

  close.addEventListener("click", () => {
    contactPopup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == contactPopup) {
      contactPopup.style.display = "none";
    }
  });
});
