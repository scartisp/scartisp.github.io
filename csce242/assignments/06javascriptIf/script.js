//show dropdown menu
const arrow = document.getElementById('arrow-i');
const dropdownMenu = document.getElementById('dropdown-menu-ul');
arrow.onclick = () => {
  arrow.classList.toggle('arrow-down');
  arrow.classList.toggle('arrow-up')
  dropdownMenu.classList.toggle('small-screen-display-none');
}

//toggle what exercise is showing
const exerciseOne = document.getElementById('exercise-one-section');
const exerciseTwo = document.getElementById('exercise-two-section');
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
classesMissedComment = document.getElementById('classes-missed-comment-p');

let classesMissed;
const totalClasses = 25;
const attendencePercent = 0.07;
let percentMissingAttendance;
document.getElementById('exercise-one-input').addEventListener('input', (event) => {
  classesMissed = event.target.value;
  percentMissingAttendance = (classesMissed / totalClasses * attendencePercent * 100).toFixed(1);

  document.getElementById('percent-lost-p').classList.remove('display-none');
  document.getElementById('percent-lost-span').innerHTML = percentMissingAttendance;
  document.getElementById('classes-skipped-span').innerHTML = classesMissed;

  if (classesMissed == 0)
    classesMissedComment.innerHTML = "you're attending all classes! Great job!";
  else if (classesMissed >= 1 && classesMissed <= 3)
    classesMissedComment.innerHTML = `you're missing ${classesMissed} classes. Ok, but don't turn it into a habit.`;
  else if (classesMissed >= 4 && classesMissed <= 8)
    classesMissedComment.innerHTML = `${classesMissed} classes? This isn't an online class. do better.`;
  else if (classesMissed > 8)
    classesMissedComment.innerHTML = `${classesMissed} classes? Just drop out.`;
});

//exercise two
const MSPERDAY = 1000 * 60 * 60 * 24;

const daysRemainingComment = document.getElementById('days-remaining-comment-p');

const endDay = new Date(2026, 11, 4);
let currDay = new Date();
let daysRemainingMs = endDay - currDay;
const daysRemaining = Math.round(daysRemainingMs / MSPERDAY);

document.getElementById('days-left-span').innerHTML = daysRemaining;

if (daysRemaining <= 0) {
  daysRemainingComment.innerHTML = "it's over, you did it!";
}
else if (daysRemaining > 0 && daysRemaining <= 10)
  daysRemainingComment.innerHTML = 'Almost done!';
else if (daysRemaining > 10 && daysRemaining <= 30) {
  daysRemainingComment.innerHTML = "You've still got a ways to go.";
} else
  daysRemainingComment.innerHTML = "Not time to start counting down yet.";