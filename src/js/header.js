function createHeader() {
    
const headerContainer = document.querySelector(".header__container");
const stripeContainer = document.createElement("div");
stripeContainer.classList.add("stripe__container");
headerContainer.appendChild(stripeContainer);

const stripeBeige = document.createElement("div");
stripeBeige.classList.add("stripe__beige");
stripeContainer.appendChild(stripeBeige);

const stripeOrange = document.createElement("div");
stripeOrange.classList.add("stripe__orange");
stripeContainer.appendChild(stripeOrange);

const stripeRed = document.createElement("div");
stripeRed.classList.add("stripe__red");
stripeContainer.appendChild(stripeRed);

const stripeCyan = document.createElement("div");
stripeCyan.classList.add("stripe__cyan");
stripeContainer.appendChild(stripeCyan);

}

createHeader();



