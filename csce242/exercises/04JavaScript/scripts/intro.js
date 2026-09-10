
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