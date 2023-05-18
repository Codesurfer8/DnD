export default class Card {
  constructor() {
    this.arrayCards = [];
  }

  addCard(element, message) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const textCard = document.createElement('span');
    textCard.classList.add('card-text');
    textCard.textContent = message;

    const close = document.createElement('span');
    close.classList.add('close');
    close.textContent = 'x';


    cardElement.insertAdjacentElement('afterbegin', textCard);
    cardElement.insertAdjacentElement('beforeend', close);

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    wrapper.insertAdjacentElement('afterbegin', cardElement);

    this.arrayCards.push(wrapper);
    const cardsContainer = element.querySelector('.cards');
    cardsContainer.insertAdjacentElement('beforeend', wrapper);
  }

  showArrayElements() {
    console.log(this.arrayCards);
  }
};