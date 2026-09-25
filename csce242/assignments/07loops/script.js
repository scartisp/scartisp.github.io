const COLORS = ['#0000FF', '#FF0000', '#00FF00', '#800080'];
const CAR_HEIGHT = 46;
const CAR_WIDTH = 90;

window.onload = () => {
  for (let i = 0; i < 10; ++i) {
    const car = createCar();
    road.append(car);
  }
}

const createCar = () => {
  const car = document.createElement('div');
  car.classList.add('car');
  car.innerHTML = `
  <div class="car-roof"></div>
  <div class="car-body"></div>
  <div class="wheel wheel-back"></div>
  <div class="wheel wheel-front"></div>
  `;
  setCarProp(car);
  return car;
}

const setCarProp = car => {
  //choose car color
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  car.style.setProperty('--car-color', color);

  //car position
  const road = document.getElementById('road');
  const laneHeight = road.clientHeight / 2;
  //choose top or bottom lane
  const lane = Math.floor(Math.random() * 2);
  const top = lane * laneHeight + (laneHeight - CAR_HEIGHT) / 2;
  //choose horizontal position of car
  const carLeft = Math.random() * (road.clientWidth - CAR_WIDTH);

  //place car
  car.style.left = `${carLeft}px`
  car.style.top = `${top}px`
}