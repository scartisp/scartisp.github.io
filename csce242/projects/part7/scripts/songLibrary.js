const baseUrl = 'https://scartisp.github.io/json/';

document.getElementById('toggle-nav-img').addEventListener('click', () => {

  document.getElementById('toggle-nav-div').classList.toggle('toggle-nav-click');
  const navUl = document.querySelector('.main-navigation-ul')
  navUl.classList.toggle('is-active');
});

//songs
const getSongs = async () => {
  const url = `${baseUrl}songs.json`;
  const response = await fetch(url);
  return response.json();
}

const showSongs = async () => {
  const songs = await getSongs();
  const songGrid = document.querySelector('.song-card-grid-div')

  songs.forEach(song => songGrid.append(createSongHTML(song)));
};

const createSongHTML = song => {
  const card = document.createElement('div');
  card.classList.add('song-card-div');
  //img
  const imgLink = document.createElement('a');
  imgLink.href = song.link;
  imgLink.target = '_blank';
  const img = document.createElement('img');
  img.src = `https://scartisp.github.io/${song.img}`;
  img.classList.add('song-card-img');
  imgLink.append(img);
  card.append(imgLink);
  //genre
  const genre = document.createElement('p');
  genre.innerHTML = song.genre;
  genre.classList.add('genre-p', 'uppercase');
  card.append(genre);
  //title and rating
  const titleDiv = document.createElement('div');
  titleDiv.innerHTML = `
    <p class="song-title-p">${song.title}- ${song.artist}</p>
      <div class="rating-div">
          <p><span class="user-rating-span">${song.rating}</span>/10</p>
          <p class="uppercase">rating</p>
      </div>
  `;
  titleDiv.classList.add('song-card-title-div');
  card.append(titleDiv);
  //techniques
  const techTitle = document.createElement('p');
  techTitle.innerHTML = 'techniques';
  techTitle.classList.add('technique-title-p', 'uppercase');
  card.append(techTitle);

  const techDiv = document.createElement('div');
  song.techniques.forEach(technique => {
    const p = document.createElement('p');
    p.innerHTML = technique;
    techDiv.append(p);
  });
  techDiv.classList.add('technique-list-div');
  card.append(techDiv);
  //link
  const linkP = document.createElement('p');
  linkP.innerHTML =  `<img src="../images/play.png">
  <a href="${song.link}" target="_blank">Listen on YouTube</a>`;
  linkP.classList.add('song-link-p');
  card.append(linkP);

  return card;
};

showSongs();
document.querySelector('.song-container-expand-list-span').addEventListener('click', () => {
  document.querySelector('.song-card-grid-div').classList.toggle('collapsed');
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