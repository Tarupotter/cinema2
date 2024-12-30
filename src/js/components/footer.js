import {  fetchData } from '../helpers/fetchDataHelper.js';
import '../../styles/footer.scss';
console.log('Started');

export function createFooter() {
    // Skapa footer-elementet
    const footer = document.createElement("footer");
  
  
    // Skapa footer__screen
    const footerScreen = document.createElement("div");
    footerScreen.className = "footer__screen";
    const screenImg = document.createElement("img");
    screenImg.src = "images/filmduk.png";
    screenImg.alt = "Illustration of a screen";
    footerScreen.appendChild(screenImg);
    footer.appendChild(footerScreen);
  
    // Skapa footer__seats
    const footerSeats = document.createElement("div");
    footerSeats.className = "footer__seats";
    const seatsImg = document.createElement("img");
    seatsImg.src = "images/stolar.png";
    seatsImg.alt = "Illustration of a movie theater";
    footerSeats.appendChild(seatsImg);
    footer.appendChild(footerSeats);
  
    // Skapa footer__links
    const footerLinks = document.createElement("div");
    footerLinks.className = "footer__links";
  
    // Hjälpfunktion för att skapa listor med BEM-klasser
    function createLinkList(blockName, title, links) {
      const ul = document.createElement("ul");
      ul.className = `${blockName}__list`;
  
      const h3 = document.createElement("h3");
      h3.className = `${blockName}__title`;
      h3.textContent = title;
      ul.appendChild(h3);
  
      links.forEach(link => {
        const li = document.createElement("li");
        li.className = `${blockName}__item`;
  
        if (link.href) {
          const a = document.createElement("a");
          a.href = link.href;
          a.className = `${blockName}__link`;
          a.textContent = link.text;
          li.appendChild(a);
        } else {
          li.textContent = link.text;
        }
  
        ul.appendChild(li);
      });
  
      return ul;
    }
  
    // Skapa olika länklister och lägg till dem i footer__links
    footerLinks.appendChild(
      createLinkList("footer__link", "Kontakt", [
        { text: "RETRO -Filmer från förr-" },
        { text: "Fiskartorget 1" },
        { text: "722 12 Västerås" },
        { text: "Tel: 123 45 56" }
      ])
    );
  
    footerLinks.appendChild(
      createLinkList("footer__link", "För företag", [
        { text: "Företagsbiljetter", href: "#" },
        { text: "Möten och event", href: "#" },
        { text: "Bioreklam", href: "#" }
      ])
    );
  
    footerLinks.appendChild(
      createLinkList("footer__link", "Hjälp och kontakt", [
        { text: "Kundservice", href: "#" },
        { text: "Cookiepolicy", href: "#" },
        { text: "Personliguppgiftspolicy", href: "#" },
        { text: "Kontakta oss", href: "contact.html" }
      ])
    );
  
    footerLinks.appendChild(
      createLinkList("footer__link", "Sociala medier", [
        { text: "TikTok", href: "#" },
        { text: "Facebook", href: "#" },
        { text: "Instagram", href: "#" }
      ])
    );
  
    footer.appendChild(footerLinks);
  
    // Lägg till footer i dokumentets body
    document.body.appendChild(footer);

  }

  createFooter();
  