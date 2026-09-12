
//toggle visibilty of speech bubble
document.getElementById('speech-li').onclick = () => {
  document.getElementById('text-bubble-div').classList.toggle('display-none');
  document.getElementById('text-bubble-div').classList.toggle('display-flex');
};

//add text when element is selected
//since we access this element more than once, might as well giv it a const
const selector = document.getElementById('selector');
let menuOpen = false;
selector.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if(!menuOpen) {
    document.getElementById('selection-choice').innerHTML = `${selector.value}: Nice choice!`;
  }
});

//make emoji appear
document.getElementById('sun-img').onclick = () => {
  document.getElementById('emoji-p').classList.toggle('display-none');
};