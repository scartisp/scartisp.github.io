const lilC = []
lilC['Rosewood Dr'] = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52928.417599224034!2d-81.05115216398738!3d33.991863357692466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8b01002d06383%3A0xf47df1b630d41273!2sLittle%20Caesars%20Pizza!5e0!3m2!1sen!2sus!4v1790308683418!5m2!1sen!2sus';
lilC['Dreher Rd'] = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52928.417599224034!2d-81.05115216398738!3d33.991863357692466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8943c30c8caed%3A0x439926f35af02195!2sLittle%20Caesars%20Pizza!5e0!3m2!1sen!2sus!4v1790310765569!5m2!1sen!2sus';
lilC['Broad River Rd'] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52928.417599224034!2d-81.05115216398738!3d33.991863357692466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a307c3582c2f%3A0x6f644a26225e18c4!2sLittle%20Caesars%20Pizza!5e0!3m2!1sen!2sus!4v1790310913414!5m2!1sen!2sus";
lilC['Garners Ferry Rd'] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52928.417599224034!2d-81.05115216398738!3d33.991863357692466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8b1a133785ad3%3A0x646e77df4f67c39f!2sLittle%20Caesars%20Pizza!5e0!3m2!1sen!2sus!4v1790310959226!5m2!1sen!2sus";

const dominos = []
dominos['Gadsden St'] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105865.09876946073!2d-81.17729565035009!3d33.985229679737806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bad7dfb83695%3A0x934d2c80d91dcc9e!2sDomino's%20Pizza!5e0!3m2!1sen!2sus!4v1790311059097!5m2!1sen!2sus";
dominos['Augusta Rd'] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105865.09876946073!2d-81.17729565035009!3d33.985229679737806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bceb0bd7ef19%3A0x296c383744e02811!2sDomino's%20Pizza!5e0!3m2!1sen!2sus!4v1790311103833!5m2!1sen!2sus";
dominos['Garners Ferry Rd'] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.8920406050088!2d-80.9457198375992!3d33.968012020486384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8b04c63559785%3A0x6a0c0f9ccd039171!2sDomino's%20Pizza!5e0!3m2!1sen!2sus!4v1790311202255!5m2!1sen!2sus";
dominos['Forest Dr'] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1653.4640925207052!2d-80.95132918806648!3d34.0200543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8afb76ff33889%3A0x2e4ec973a096cc29!2sDomino's%20Pizza!5e0!3m2!1sen!2sus!4v1790311243337!5m2!1sen!2sus";

const selector = document.getElementById('selector')
const locationUl = document.getElementById('destination-choices-ul');
selector.onchange = () => {
  if (selector.value === 'Little Caesars') {
    while (locationUl.firstChild)
      locationUl.removeChild(locationUl.firstChild);
    populateUl(lilC);
  }
  else if (selector.value === 'Dominos') {
    while (locationUl.firstChild) {
      locationUl.removeChild(locationUl.firstChild);
    }
    populateUl(dominos);
  }
};

const populateUl = (arr) => {
  for (let shop in arr) {
    let newLi = document.createElement('li')
    newLi.innerHTML = shop;
    newLi.addEventListener('click', () => {
      displayIframe(arr[shop])
    });
    locationUl.append(newLi)
  }

};

const iframeDiv = document.getElementById('iframe-div')
const displayIframe = (src) => {
  while (iframeDiv.firstChild)
    iframeDiv.removeChild(iframeDiv.firstChild);
  newIframe = document.createElement('iframe');
  newIframe.src = src;
  newIframe.classList.add('map');
  iframeDiv.append(newIframe);
}