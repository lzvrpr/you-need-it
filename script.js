const betButton = document.querySelector('.bet-button');

betButton.addEventListener('click', () => {
  document.querySelector('#lots').scrollIntoView({ behavior: 'smooth' });
});
