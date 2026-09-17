
//shows message when btn clicked
document.getElementById('btn-show-message').onclick = (e) => {
  document.getElementById('p-message').innerHTML = 'Hello world';
  e.target.innerHTML = 'done';
};


//styles the link when it's clicked
document.getElementById('link').onclick = (e) => {
  console.log('link clicked');
  e.preventDefault(); //don't go to links destination 
  e.target.classList.add('cool-link');

};

document.getElementById('ball-btn').onclick = () => {
  document.getElementById('ball').classList.toggle('bouncing-ball');
};

const txtNumDays = document.getElementById('txt-num-days');
const imgPlant = document.getElementById('img-plant');
txtNumDays.onkeyup = () => {
  imgPlant.classList.remove('hidden')
  const numDays = txtNumDays.value;
  console.log(numDays)
  const pPlantHTML = document.getElementById('p-plant-msg');

  if (numDays >= 0 && numDays <= 2) {
    pPlantHTML.innerHTML = `let your plant rest it's only been ${numDays} days`;
    imgPlant.src = 'https://dummyimage.com/150x150/478f25/000000&text=happy plant'
  }
  else if (numDays >= 3 && numDays <= 5) {
    pPlantHTML.innerHTML = 'Time to water';
  }
  else if (numDays >= 5 && numDays <= 7) {
    pPlantHTML.innerHTML = 'wilting';
  }
  else if (numDays >= 3 && numDays <= 5) {
    pPlantHTML.innerHTML = 'goodbye plant';
  }
};

//counting:
let countInterval;
let count = 0;
const pCount = document.getElementById('p-count');
const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const btnStop = document.getElementById('btn-stop');
btnPause.disabled = true;
btnStop.disabled = true;


btnStart.onclick = () => {
  btnPause.disabled = false;
btnStop.disabled = false;
  countInterval = setInterval(() => {
    pCount.innerHTML = ++count;
  },500);
};

btnPause.onclick = () => {
  clearInterval(countInterval)
};

btnStop.onclick = () => {
  count = 0;
  pCount.innerHTML = '';
  clearInterval(countInterval);
};

//date display 

setInterval(() => {
  const pDisplay = document.getElementById('date-display');
  const today = new Date()
  const seconds = today.getSeconds();
  pDisplay.innerHTML = seconds;
}, 1000)