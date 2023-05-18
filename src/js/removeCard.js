export const removeCard = (elements) => {
    elements.forEach(item => {
        item.addEventListener('click', (event) => {
            let actualElement = event.target.closest('.card');
            actualElement.remove();
        });
    });
}