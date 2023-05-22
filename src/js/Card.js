export default class Card {
  constructor() {
    this.arrayCardId = [];
  }

  add(element, message) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.draggable = true;
    cardElement.dataset.id = Math.random();

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');


    const cardText = document.createElement('span');
    cardText.classList.add('card-text');
    cardText.textContent = message;

    const cardCloseBtn = document.createElement('span');
    cardCloseBtn.classList.add('close');
    cardCloseBtn.textContent = 'x';

    cardContent.insertAdjacentElement('afterbegin', cardText)
    cardContent.insertAdjacentElement('afterbegin', cardCloseBtn)


    cardElement.insertAdjacentElement('afterbegin', cardContent);


    const cardsContainer = element.querySelector('.cards');
    cardsContainer.insertAdjacentElement('beforeend', cardElement);

  }


  remove(elements) {
    elements.forEach(item => {
      item.addEventListener('click', (event) => {
        let actualElement = event.target.closest('.card');
        actualElement.remove();
      });
    });
  }
};