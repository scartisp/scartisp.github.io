//reused elements
const arrow = document.getElementById('arrow-i');
const dropdownMenu = document.getElementById('dropdown-menu-ul');
const missingClasses = document.getElementById('missing-class');
const endSemester = document.getElementById('end-semester');
//show dropdown menu
arrow.onclick = () => {
  arrow.classList.toggle('arrow-down');
  arrow.classList.toggle('arrow-up')
  dropdownMenu.classList.toggle('small-screen-display-none');
}

//toggle what exercise is showing
document.getElementById('exercise-one-li').onclick = () => {
  missingClasses.classList.remove('display-none');
  missingClasses.classList.add('display-flex');

  endSemester.classList.remove('display-flex');
  endSemester.classList.add('display-none');
};

document.getElementById('exercise-two-li').onclick = () => {
  endSemester.classList.remove('display-none');
  endSemester.classList.add('display-flex');
  
  missingClasses.classList.remove('display-flex');
  missingClasses.classList.add('display-none');
};