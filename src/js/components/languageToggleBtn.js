import { toggleLanguage, currentLanguage } from '../helpers/languageManager';
export const createLanguageToggleBtn = (initialLanguage, onToggle) => {
  const button = document.createElement('button');
  button.id = 'language-toggle-btn';
  button.textContent = initialLanguage === 'sv' ? 'In English' : 'Till Svenska';

  button.addEventListener('click', () => {
    toggleLanguage(button);
    if (onToggle && typeof onToggle === 'function') {
      onToggle(currentLanguage);
    }
  });

  return button;
};
