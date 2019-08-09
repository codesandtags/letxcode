// Put the logic here
console.log('Loaded Results!');

let isKeyboardsVisible = false;
const keyboardsSection = document.querySelector('#keyboardsSection');
const keyboardsToggle = document.querySelector('#keyboardsToggle');
const toggleKeyboardVisibility = (event) => {
  console.log('Performing toggle....');
  isKeyboardsVisible = !isKeyboardsVisible;
  keyboardsSection.classList.toggle('visible');
  console.log(keyboardsSection);
}

keyboardsToggle.addEventListener('click', toggleKeyboardVisibility);
