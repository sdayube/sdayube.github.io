const textInput = document.querySelector('#text-input');
const textInputLower = document.querySelector('#text-input-lower');
const memeText = document.querySelector('#meme-text');
const memeTextLower = document.querySelector('.meme-text-lower');
const imageInput = document.querySelector('#meme-insert');
const imageOutput = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const waterButton = document.querySelector('#water');
const fireButton = document.querySelector('#fire');
const earthButton = document.querySelector('#earth');
const templates = document.querySelector('.preloaded-images');
const bodyElement = document.querySelector('body');

function updateText() {
  memeText.innerHTML = textInput.value;
  memeTextLower.innerHTML = textInputLower.value;
}

textInput.addEventListener('keyup', updateText);
textInputLower.addEventListener('keyup', updateText);

function loadImage(event) {
  imageOutput.src = URL.createObjectURL(event.target.files[0]); // src: https://shorturl.at/lqFN2
}

imageInput.addEventListener('change', loadImage);

function changeLayout(type) {
  const [borderConf, backgroundConf] = type;
  memeContainer.style.border = borderConf;
  bodyElement.style.backgroundImage = backgroundConf;
}

function baseLayout() {
  const base = [
    '1px solid black',
    'linear-gradient(rgb(196 , 176 , 176) , rgb(179 , 174 , 197))',
  ];
  return base;
}

function fireLayout() {
  const fire = [
    '3px dashed red',
    'linear-gradient(rgb(182 , 101 , 101) , rgb(212 , 212 , 50))',
  ];
  return fire;
}

function waterLayout() {
  const water = [
    '5px double blue',
    'linear-gradient(rgb(156 , 165 , 216) , rgb(104 , 191 , 197))',
  ];
  return water;
}

function earthLayout() {
  const earth = [
    '6px groove green',
    'linear-gradient(rgb(143 , 167 , 138) , rgb(87 , 77 , 76))',
  ];
  return earth;
}

changeLayout(baseLayout());

waterButton.addEventListener('click', () => changeLayout(waterLayout()));
fireButton.addEventListener('click', () => changeLayout(fireLayout()));
earthButton.addEventListener('click', () => changeLayout(earthLayout()));

function loadTemplate(event) {
  if (event.target.src) {
    imageOutput.src = event.target.src;
  }
}

templates.addEventListener('click', loadTemplate);
