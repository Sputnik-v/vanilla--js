
const header = document.querySelector('header');
const form = document.querySelector('.form');
const links = document.querySelectorAll('.nav-item');
const linksActive = document.querySelectorAll('.nav-link');

function createElem(content) {
  const elem = document.createElement('div');
  elem.innerHTML = content;
  return elem;
}
function removeElem(element) {
  element.remove();
}

function addElement(prevElement, element) {
prevElement.after(element);
}

function addActive(elem) {
  Array.from(linksActive).forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
    elem.classList.add('active');
  })
}

const addListener = (e) => {
  const text = e.target.text;

  if(text === 'Tests') {
    const elem = createElem(testsFunc());
    const aboutElem = document.querySelector('.about');
    addActive(e.target);
    if(document.querySelector('.main')) {
      return;
    }
    if(form) {
      removeElem(form);
    }
    if(aboutElem) {
      removeElem(aboutElem);
    }

    addElement(header, elem);

  }
  if(text === 'About') {
    const elem = createElem(aboutFunc());
    addActive(e.target);
    if(document.querySelector('.about')) {
      return;
    }
    const mainElem = document.querySelector('.main');
    if(mainElem) {
      removeElem(mainElem);
    }
    if(form) {
      removeElem(form);
    }

    addElement(header, elem);
  }
  if(text === 'Home') {
    location.reload();
  }
}

for (const link of links) {
  link.addEventListener('click', addListener)};






