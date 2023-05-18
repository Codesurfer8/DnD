import Card from "./addCard.js";
import { removeCard } from "./removeCard.js";
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
      newCard.addCard(item, message);
      controlInputArea();
      textarea.value = '';
    }

    const allCloseOfCards = document.querySelectorAll('.close');
    removeCard(allCloseOfCards);

    const allCards = document.querySelectorAll('.card');
    displayCloseBtns(allCards);

    ///////////>
    const internalContainer = document.querySelector('.internal-container');
    const itemCard = internalContainer.querySelector('.card');

    let actualElement;

    const onMouseUp = (e) => {
      actualElement.classList.remove('dragged');
      actualElement = undefined;

      document.body.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseover', onMouseOver);

    }

    const onMouseOver = (e) => {
      console.log(e);

      actualElement.style.top = e.clientY + 'px';
      actualElement.style.left = e.clientX + 'px';
    }

    internalContainer.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('card')) {
        actualElement = e.target;
        actualElement.classList.add('dragged');
      }

      document.body.addEventListener('mouseup', onMouseUp);
      document.body.addEventListener('mouseover', onMouseOver);

    });




  });
});






