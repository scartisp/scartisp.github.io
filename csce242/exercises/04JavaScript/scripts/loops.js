
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
  if (isNaN(startText) || startText > 5 || startText < 0) {
    errorStart.innerHTML = '* invalid';
    errorStart.classList.remove('hidden');
    return;
  }

  if (isNaN(endText) || endText > 20 || endText < 10) {
    errorEnd.innerHTML = '* invalid';
    errorEnd.classList.remove('hidden');
    return;
  }

  errorEnd.classList.add('hidden');
  errorStart.classList.add('hidden');
  ul.innerHTML = '';

  for (let i = parseInt(startText); i < parseInt(endText); ++i) {
    const li = document.createElement('li');
    li.innerHTML = i;
    ul.appendChild(li);
  }
};

document.getElementById('btn-show-toys').onclick = () => {
  const toys = ['doll', 'skate board', 'mini car', 'board game', 'bracelets'];
  const toyList = document.getElementById('toy-list');

  // for(let i = 0; i < toys.length; i++) {
  //   const p = document.createElement('p');
  //   p.innerHTML = toys[i];
  //   toyList.append(p);
  // }
  toys.forEach((toy) => {
    const p = document.createElement('p');
    p.innerHTML = toy;
    toyList.append(p);
  })
}

document.getElementById('btn-show-toy-prices').onclick = () => {
  const div = document.getElementById('toy-info');
  div.innerHTML = '';
  const toyMap = [];
  toyMap['doll'] = 129.99;
  toyMap['skate board'] = 200;
  toyMap['mini car'] = 1.99;
  toyMap['board game'] = 20.99;
  toyMap['braclettes'] = 19.24;
  
  const table = document.createElement('table');
  // let tr = document.createElement('tr');
  // let th = document.createElement('th');
  // th.innerHTML = 'name'
  // tr.append(th);
  // th = document.createElement('th');
  // th.innerHTML = 'price'
  // tr.append(th);

  table.append(createTR('name', 'price', 'th'));
  div.append(table);
  console.log(table);

  for(let toy in toyMap) {
    table.append(createTR(toy,"$" + toyMap[toy], 'td'));
  }
}

const createTD = (data) => {
  const td = document.createElement('td');
  td.innerHTML = data;
  return td;
}

const createElement = (data, type) => {
  const elem = document.createElement(type);
  elem.innerHTML = data;
  return elem;
}

const createTR = (data1,data2, type) => {
  const tr = document.createElement('tr');
  tr.append(createElement(data1, type));
  tr.append(createElement(data2, type));
  return tr;
}