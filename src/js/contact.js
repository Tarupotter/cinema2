import '../styles/contact.scss';
import { createFooter } from './components/footer';


// Header fetch
// Fetch file from public/contact.json because fetch dont work when file lies in src folder
// Footer fetch 

fetch('/contact.json')  
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    document.querySelector('.contact-page__title').textContent = data.pageTitle;
    document.querySelector('.contact-form__label--name').textContent = data.form.name;
    document.querySelector('.contact-form__label--email').textContent = data.form.email;
    document.querySelector('.contact-form__label--phoneNumber').textContent = data.form.phoneNumber;
    document.querySelector('.contact-form__label--topic').textContent = data.form.topic;
    document.querySelector('.contact-form__label--message').textContent = data.form.message;
    document.querySelector('.contact-form__button').textContent = data.form.submitButton;
  })
  .catch(error => {
    console.error('Error loading contact data:', error);
  });

