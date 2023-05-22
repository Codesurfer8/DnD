import Card from "./Card.js";
import { displayCloseBtns } from "./displayCloseBtns.js";

const newCard = new Card();
const allColumn = document.querySelectorAll('.column');


allColumn.forEach(item => {

  const textarea = item.querySelector('.textarea');
  const buttonOpenTextarea = item.querySelector('.btn-open-textarea');
  const buttonAddCard = item.querySelector('.btn-add-card');

  const controlInputArea = () => {
    buttonOpenTextarea.style.display = 'block';
    textarea.style.display = 'none';
    buttonAddCard.style.display = 'none';
  };

  buttonOpenTextarea.addEventListener('click', (event) => {
    textarea.style.display = 'block';
    buttonOpenTextarea.style.display = 'none';
    buttonAddCard.style.display = 'block';
  });

  buttonAddCard.addEventListener('click', (event) => {
    const message = textarea.value;

    if (message === '') {
      controlInputArea();
    } else {
      newCard.add(item, message);
      controlInputArea();
      textarea.value = '';
    }

    const allCloseOfCards = document.querySelectorAll('.close');
    newCard.remove(allCloseOfCards);

    const allCards = document.querySelectorAll('.card');
    displayCloseBtns(allCards);

   ///////////////////





  });
});
