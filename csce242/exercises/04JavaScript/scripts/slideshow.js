document.getElementById('hero-arrow-right').onclick = (e) => {
  e.preventDefault();
  const currentSlide = document.querySelectorAll('#slideshow :not(.hidden)');
  let nextSlide = currentSlide.nextElementSibling;
  if (nextSlide == null) {
    document.querySelector('#slideshow: first-child');
  }
  slide(currentSlide, nextSlide);
};

document.getElementById('hero-arrow-left').onclick = (e) => {
  e.preventDefault();
  const currentSlide = document.querySelectorAll('#slideshow :not(.hidden)');
  let nextSlide = currentSlide.previousElementSibling;
    if (nextSlide == null) {
    document.querySelector('#slideshow: last-child');
  } 
  slide(currentSlide,nextSlide);
};

const slide = (currentSlide, nextSlide) => {
  currentSlide.classList.add('hidden');
  nextSlide.classList.remove('hidden');
}