import 'normalize.css';
import './assets/css/styles.scss';

(() => {
  const formInputWrappers = document.querySelectorAll('.contact-us__elements__wrapper') || [];

  [...Array.from(formInputWrappers)].forEach((element) => {
    const input = element.querySelector('input');
    const textArea = element.querySelector('textarea');

    const elementChild = input || textArea;
    const elementPlaceholder = element.querySelector('.contact-us__form-placeholder');

    elementChild.addEventListener('focus', () => {
      elementPlaceholder.style.fontSize = '14px';
    });
    elementChild.addEventListener('blur', () => {
      elementPlaceholder.style.fontSize = '25px';
    });
  });
})();