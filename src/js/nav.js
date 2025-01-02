import '../styles/nav.scss';


async function loadNavbar() {
    try {
      const response = await fetch('/database/nav.json');  
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
  
      const data = await response.json();  
  
      const language = 'sv';  
      const navItems = data.NavItems[language];  
  
      const navBar = document.createElement("nav");
      const ul = document.createElement("ul");
  
      
      navItems.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.name;  
  
        li.appendChild(link);
        ul.appendChild(li);
      });
  
      navBar.appendChild(ul);  
      document.querySelector('.header__container').prepend(navBar);  
    } catch (error) {
      console.error('Error:', error); 
    }
  }
  
  
  loadNavbar();