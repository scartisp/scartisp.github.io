const vacationUl = document.querySelector('#vacation-ul')
const modal = document.querySelector('#vacation-modal');
class Location {
  constructor(name, image, map, type, description, todo) {
    this.name = name;
    this.image = image;
    this.map = map;
    this.type = type;
    this.description = description;
    this.todo = todo;
  }

  get card() {
    const vacationLi = document.createElement('li')
    vacationLi.classList.add('vacation-li');

    const vacationH2 = document.createElement('h2')
    vacationH2.textContent = this.name;
    vacationLi.append(vacationH2)

    const vacationP = document.createElement('p');
    vacationP.textContent = `${this.type} Vacation`
    vacationLi.append(vacationP);

    const vacationImg = document.createElement('img');
    vacationImg.src = this.image;
    vacationLi.append(vacationImg);
    return vacationLi;
  }
}

const vacations = []

vacations.push(new Location('Myrtle Beach', './images/myrtle-beach.png', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53096.99472245056!2d-78.92672026660037!3d33.720276501835485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890068953b552101%3A0xbc0fb115b5d09618!2sMyrtle%20Beach%2C%20SC!5e0!3m2!1sen!2sus!4v1790919209849!5m2!1sen!2sus"</iframe>', 'Beach', 'a major resort city and vibrant tourist hub located along a 60-mile stretch of South Carolina coastline known as the Grand Strand', 'Visit the beach, Broadway at the Beach, or Wonderworks'))

vacations.push(new Location('Pigeon Forge', './images/pigeon-forge.png', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25889.74370461923!2d-83.59975855872378!3d35.794582052936555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885bff0da7e6bdcb%3A0x1770c0708e28804e!2sPigeon%20Forge%2C%20TN!5e0!3m2!1sen!2sus!4v1790923862146!5m2!1sen!2sus"</iframe>', 'Mountain', 'A popular mountain resort city in eastern Tennessee known for its family-friendly attractions, live entertainment, and proximity to the Great Smoky Mountains National Park', 'visit the Great Smokey Mountains National Park, or the Island at Pigeon Forge!'))

vacations.push(new Location('Area 51', './images/area-51.png', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50813.487781198164!2d-115.84520644535398!3d37.251432634078284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b81baaba3e8c81%3A0x970427e38e6237ae!2sArea%2051%2C%20NV!5e0!3m2!1sen!2sus!4v1790924430823!5m2!1sen!2sus"</iframe>', 'Military Installation', 'A securtive military installation steeped in conspiracy theories and paranoia. Uncover the unimaginable truth, or become another john doe', 'fly ufos, dissect aliens, leak state secrets, become The Chosen One, discover horrors beyond imagination'))

vacations.push(new Location('Point Nemo', './images/point-nemo.png', '<iframe src="https://www.google.com/maps/embed?pb=!1m15!1m10!1m3!1d35574876.369712174!2d-123.3933333!3d-48.8766667!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDUyJzM2LjAiUyAxMjPCsDIzJzM2LjAiVw!5e1!3m2!1sen!2sus!4v1790925317193!5m2!1sen!2sus"</iframe>', 'Oceanic', 'The furthest point on Earth from any land at all. If you find yourself vacationing here, make sure everyone you know knows where you are and when you expect to return.', 'Experience the vastness of nature, go fishing, discover a Leviathen, become one with the waves, lose yourself to the vast emptiness.'));

vacations.push(new Location('Point Pleasant', './images/point-pleasant.png', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24856.981651614766!2d-82.15038650394564!3d38.85254811204101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88489c818926aae1%3A0x4294c7ac07660e0f!2sPoint%20Pleasant%2C%20WV!5e0!3m2!1sen!2sus!4v1790925859367!5m2!1sen!2sus"</iframe>', 'Historic', ' A historic river city in West Virginia and the county seat of Mason County, famous worldwide for the legend of the Mothman.', 'Visit the Mothman statue, visit the Mothman meusum, visit the Mothman.'))

vacations.push(new Location('Chernobyl', './images/chernobyl.png', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9983.784359000616!2d30.21158578849056!3d51.275311421685984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472a8f00e898abcf%3A0x14bcceabdbfd5d2c!2sChornobyl%2C%20Kyiv%20Oblast%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1790926567120!5m2!1sen!2sus"</iframe>', 'Historic', 'A vacation for those who live on the edge. Make sure you do your homework and pack a geiger counter before stepping foot here', "grow an extra finger, get bit by some random radioactive dog, visit Mothman's edgier cousin, The Blackbird of Cheronbyl"))

vacations.forEach(vacation => {
  const vacationLi = vacation.card;
  vacationUl.append(vacationLi);
  vacationOnClick(vacation, vacationLi);
});

function vacationOnClick(vacation, vacationLi) {
  vacationLi.addEventListener('click', () => {
    document.getElementById('modal-map').innerHTML = vacation.map;
    document.getElementById('modal-name').textContent = vacation.name;
    document.getElementById('modal-type').textContent = vacation.type;
    document.getElementById('modal-description').textContent = vacation.description
    document.getElementById('modal-todo').textContent = vacation.todo;
    modal.style.display = 'block';
  });
}

document.getElementById('modal-close').onclick = () => {
  modal.style.display = 'none'
};

modal.onclick = (e) => {
  if (e.target === modal)
    modal.style.display = 'none'
}