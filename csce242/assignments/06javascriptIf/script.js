//reused elements
const arrow = document.getElementById('arrow-i');
const dropdownMenu = document.getElementById('dropdown-menu-ul');
const exerciseOne = document.getElementById('exercise-one-section');
const exerciseTwo = document.getElementById('exercise-two-section');
//show dropdown menu
arrow.onclick = () => {
  arrow.classList.toggle('arrow-down');
  arrow.classList.toggle('arrow-up')
  dropdownMenu.classList.toggle('small-screen-display-none');
}

//toggle what exercise is showing
document.getElementById('exercise-one-li').onclick = () => {
  exerciseOne.classList.remove('display-none');
  exerciseOne.classList.add('display-flex');

  exerciseTwo.classList.remove('display-flex');
  exerciseTwo.classList.add('display-none');
};

document.getElementById('exercise-two-li').onclick = () => {
  exerciseTwo.classList.remove('display-none');
  exerciseTwo.classList.add('display-flex');
  
  exerciseOne.classList.remove('display-flex');
  exerciseOne.classList.add('display-none');
};

//exercise one
