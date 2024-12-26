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

  Object.entries( aboutUsItems ).forEach( ( [ key, value ] ) =>
  {
    const sectionContainer = document.createElement( 'div' );
    sectionContainer.className = `about-us__container about-us__container--${ key }`;
    
    const section = document.createElement('section');
    section.className = `about-us__section about-us__section__${key}`;

    const title = document.createElement('h2');
    title.className = `about-us__section__${key}--title`;
    title.textContent = value.title.charAt(0).toUpperCase() + value.title.slice(1);

    const paragraph = document.createElement('p');
    paragraph.className = `about-us__section__${key}--text`;
    paragraph.textContent = value.content;

    const imgContainer = document.createElement( 'div' );
    imgContainer.className = `about-us__section__${key}__image-container about-us__imgContainer`;

    const image = document.createElement('img');
    image.className = `about-us__section__${key}__image-container--image about-us__imgContainer__image`;
    image.src = value.src;
    image.alt = value.alt;

    imgContainer.appendChild(image)


    section.appendChild(title);
    section.appendChild(paragraph);
    section.appendChild(imgContainer);

    sectionContainer.appendChild(section);
    aboutUsContainer.appendChild(sectionContainer);
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

