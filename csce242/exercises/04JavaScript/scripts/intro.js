

document.getElementById('btn-show-message').onclick = (e) => {
  document.getElementById('p-message').innerHTML = 'Hello world';
  e.target.innerHTML = 'done';
};