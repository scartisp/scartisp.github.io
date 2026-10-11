document.getElementById('toggle-nav-img').addEventListener('click', () => {

  document.getElementById('toggle-nav-div').classList.toggle('toggle-nav-click');
  const navUl = document.querySelector('.main-navigation-ul')
  navUl.classList.toggle('is-active');
});

//carousel 
const cardUl = document.getElementById('card-ul');
const cards = cardUl.querySelectorAll('.genre-card');
const dotsDiv = document.getElementById('carousel-dots-div');
let curIndex = 0;

const getVisible = () => parseInt(getComputedStyle(cardUl).getPropertyValue('--visible'));
//last card visible 
const getMaxIndex = () => Math.max(0, cards.length - getVisible());

const renderDots = () => {
  //reset it
  dotsDiv.innerHTML = '';

  for (let i = 0; i <= getMaxIndex(); ++i) {
    const dot = document.createElement('div');
    dot.classList.add(i === curIndex ? 'selected' : 'unselected');
    dot.addEventListener('click', () => goTo(i));
    dotsDiv.append(dot);
  }
};

const goTo = (index, behavior = 'smooth') => {
  curIndex = Math.min(Math.max(index, 0), getMaxIndex());
  cardUl.scrollTo({
    left: cards[curIndex].offsetLeft - cards[0].offsetLeft,
    behavior: behavior
  });
  renderDots();
}

document.getElementById('carousel-prev').addEventListener('click', () => goTo(curIndex - 1));
document.getElementById('carousel-next').addEventListener('click', () => goTo(curIndex + 1));
//handle change in --visible
window.addEventListener('resize', () => goTo(curIndex, 'instant'));

renderDots();

//contact form
const contactForm = document.getElementById('contact-form');

//toggle display
document.getElementById('contact-p').addEventListener('click', () => {
  contactForm.classList.toggle('display-none');
  contactForm.classList.toggle('display-flex');
});

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

contactForm.onsubmit = async e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const result = document.getElementById('form-result');
  result.innerHTML = 'Sending...';

  formData.append('access_key', '3af6f6ef-11f6-4179-93af-fdc460739a0d');
  try {
    const [response] = await Promise.all([
      fetch("https://api.web3forms.com/submit", { method: "POST", body: formData }),
      wait(1500)
    ]);

    const data = await response.json();

    if (response.ok) {
      result.innerHTML = "message sent";
      contactForm.reset();
    } else {
      result.innerHTML = "Error: " + data.message;
    }
  } catch (error) {
    result.innerHTML = "sorry, couldn't send";
  }
};