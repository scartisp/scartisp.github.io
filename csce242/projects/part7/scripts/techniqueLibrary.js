document.getElementById('toggle-nav-img').addEventListener('click', () => {

  document.getElementById('toggle-nav-div').classList.toggle('toggle-nav-click');
  const navUl = document.querySelector('.main-navigation-ul')
  navUl.classList.toggle('is-active');
});

//filter options
document.getElementById('filter-section').addEventListener('change', e => {
  e.target.closest('.filter-option-p').classList.toggle('filter-option-p-selected', e.target.checked);
})

//contact form
const contactForm = document.getElementById('contact-form');

//toggle display
document.getElementById('contact-p').addEventListener('click', () => {
  contactForm.classList.toggle('display-none');
  contactForm.classList.toggle('display-flex');
});
//create a timer, wrap it in a promise
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