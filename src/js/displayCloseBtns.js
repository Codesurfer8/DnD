export const displayCloseBtns = (elements) => {
    elements.forEach(item => {
        item.addEventListener('mouseover', (event) => {
          const closeButton = event.currentTarget.querySelector('.close');
          closeButton.style.display = 'block';
        });
  
        item.addEventListener('mouseout', (event) => {
          const closeButton = event.currentTarget.querySelector('.close');
          closeButton.style.display = 'none';
        });
      })
}