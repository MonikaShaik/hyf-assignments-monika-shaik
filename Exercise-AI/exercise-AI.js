const buttonElement = document.getElementById('colorButton');

buttonElement.addEventListener('click', () => {
  console.log('Button clicked');
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});