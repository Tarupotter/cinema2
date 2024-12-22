import {
  currentLanguage,
  toggleLanguage,
  fetchData,
} from './helpers/languageManager';

const aboutUsContainer= document.querySelector('#about-us-container')
const languageTogglerBtn = document.createElement('button');

const loadAboutUsItems = async (language) =>
{
    const data = await fetchData( '/database/aboutUs.json' )
     const { introduction, origin, vision } = data.aboutUs[language];
    console.log(introduction, origin, vision)
}

loadAboutUsItems('sv')