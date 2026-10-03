class Dog {
  constructor(title, breed, age, size, pic) {
    this.title = title;
    this.breed = breed;
    this.age = age;
    this.size = size;
    this.pic = pic;
  }

  get item() {
    const section = document.createElement('section');
    section.classList.add('dog');
    section.append(this.dogName());
    section.append(this.dogImage());

    const moreInfo = section.querySelector('.more-info');
    moreInfo.classList.add('hidden');

    return section
  }

  dogName() {
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    h3.append(a);
    a.textContent = this.title;
    a.href='#';

    return h3
  }

  dogImage() {
    const img = document.createElement('img');
    img.src= this.pic;
    img.alt = `Picture of ${this.title}`
    return img;
  }

  moreInfo() {
    const ul = document.createElement('ul');
    
    ul.append(this.liInfo('Breed', this.breed))
    ul.append(this.liInfo('size', this.size))
    ul.append(this.liInfo('Age', this.age))

  }

  liInfo(property, value) {
    const li = document.createElement('li');
    li.append(`<strong>${property}</strong>: ${value}`);
    return li;
  }

}

const dogs = [];

dogs.push(new Dog('coco', 'yorkie', 5, 'small', './images/yorkie.jpg'));
dogs.push(new Dog('Sam', 'golden retriever', 2, 'large', './images/golden_retriever.jpg'))
dogs.push(new Dog('Gerald', 'Pit Bull', 1, 'large', './images/pitbull.jpg'));


const dogsDiv = document.querySelector('.dogs');

dogs.forEach((dog) => {
  dogsDiv.append(dog.item);
});