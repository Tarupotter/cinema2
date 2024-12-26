import { currentLanguage, fetchData } from './helpers/languageManager.js';
import { createLanguageToggleBtn } from './components/languageToggleBtn.js';

import '../styles/about.scss';
import '../styles/main.scss';

const aboutUsArticle = document.querySelector('.about-us');
const aboutUsContainer = document.querySelector('#about-us-container');

const loadAboutUsItems = async (language) => {
  aboutUsContainer.innerHTML = '';

  const data = await fetchData('/database/aboutUs.json');

  if (!data || !data.aboutUs || !data.aboutUs[language]) {
    console.error('Invalid data or language not found');
    return;
  }

  const aboutUsItems = {
    introduction: data.aboutUs[language].introduction,
    origin: data.aboutUs[language].origin,
    vision: data.aboutUs[language].vision,
  };

  Object.entries(aboutUsItems).forEach(([key, value]) => {
    const section = document.createElement('section');
    section.className = `about-us__section about-us__section__${key}`;

    const title = document.createElement('h2');
    title.className = `about-us__section__${key}--title`;
    title.textContent = key.charAt(0).toUpperCase() + key.slice(1);

    const paragraph = document.createElement('p');
    paragraph.className = `about-us__section__${key}--text`;
    paragraph.textContent = value;

    section.appendChild(title);
    section.appendChild(paragraph);

    aboutUsContainer.appendChild(section);
  });
};

const loadAboutUsPage = () => {
  const languageTogglerBtn = createLanguageToggleBtn(
    currentLanguage,
    (newLanguage) => {
      loadAboutUsItems(newLanguage);
    },
  );

  aboutUsArticle.prepend(languageTogglerBtn);

  loadAboutUsItems(currentLanguage);
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  loadAboutUsPage();
});

