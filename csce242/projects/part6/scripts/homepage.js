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

  for(let i= 0; i <=getMaxIndex(); ++i) {
    const dot = document.createElement('div');
    dot.classList.add(i === curIndex ? 'selected' : 'unselected');
    dot.addEventListener('click', () => goTo(i));
    dotsDiv.append(dot);
  }
};

const goTo = (index, behavior='smooth') => {
  curIndex = Math.min(Math.max(index, 0), getMaxIndex());
  cardUl.scrollTo({
    left:cards[curIndex].offsetLeft - cards[0].offsetLeft,
    behavior: behavior
  });
  renderDots();
}

document.getElementById('carousel-prev').addEventListener('click', () => goTo(curIndex-1));
document.getElementById('carousel-next').addEventListener('click', () => goTo(curIndex+1));
//handle change in --visible
window.addEventListener('resize', () => goTo(curIndex, 'instant'));

renderDots();