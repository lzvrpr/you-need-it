const betButton = document.querySelector('.bet-button');

// Кнопка прокручивает страницу к списку лотов, где можно выбрать карточку.
betButton.addEventListener('click', () => {
  document.querySelector('#lots').scrollIntoView({ behavior: 'smooth' });
});
