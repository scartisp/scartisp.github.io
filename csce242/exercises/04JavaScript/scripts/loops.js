
document.getElementById('btn-loop').onclick = () => {
  const loopResult = document.getElementById('loop-result');
  for (let i = 1; i < 7; ++i) {
    p = document.createElement('p');
    p.innerHTML = i;
    loopResult.append(p);
  }
};

//looping through range
document.getElementById('btn-loop-range').onclick = () => {
  const startText = parseInt(document.getElementById('txt-start').value);
  const endText = parseInt(document.getElementById('txt-end').value);
  const errorStart = document.getElementById('error-start');
  const errorEnd = document.getElementById('error-end');
  const ul = document.getElementById('range-list');
  if(isNaN(startText) || startText > 5 || startText < 0) {
    errorStart.innerHTML = '* invalid';
    errorStart.classList.remove('hidden');
    return;
  }

  if(isNaN(endText) || endText > 20 || endText < 10) {
    errorEnd.innerHTML = '* invalid';
    errorEnd.classList.remove('hidden');
    return;
  }

  errorEnd.classList.add('hidden');
  errorStart.classList.add('hidden');
  ul.innerHTML = '';

  for(let i = parseInt(startText); i < parseInt(endText); ++i) {
    const li = document.createElement('li');
    li.innerHTML = i;
    ul.appendChild(li);
  }
};

document.getElementById('btn-show-toys').onclick = () => {
  const toys = ['doll', 'skate board', 'mini car', 'board game', 'bracelets'];
  const toyList = document.getElementById('toy-list');

  for(let i = 0; i < toys.length; i++) {
    const p = document.createElement('p');
    p.innerHTML = toys[i];
    toyList.append(p);
  }
}