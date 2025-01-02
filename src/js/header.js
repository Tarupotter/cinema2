import "../styles/header.scss";
import { createLogo } from "./stripes.js";

function createHeader() {
  createLogo();

  const navButton = document.createElement("img");
  navButton.classList.add("nav__button");
  navButton.src = "/images/sliders/hamburger.png";
  navButton.alt = "button for navbar";

  document.querySelector(".header__container").prepend(navButton);

  navButton.addEventListener("click", function () {});
}

createHeader();
