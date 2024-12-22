import {
  currentLanguage,
  toggleLanguage,
  fetchData,
} from './helpers/languageManager';

import '../styles/about.scss';
import '../styles/main.scss';
const loadAboutUsPage = () => {
  const aboutUsContainer = document.querySelector('#about-us-container');
  const languageTogglerBtn = document.createElement('button');
  console.log(aboutUsContainer);

  const loadAboutUsItems = async (language) => {
    const data = await fetchData('/database/aboutUs.json');
    console.log(data);

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

  loadAboutUsItems('sv');
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  loadAboutUsPage();
});
