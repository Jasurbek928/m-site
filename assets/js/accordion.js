const openCloseAccordion = e => {
  let panel, mark, originalHeight;
  panel = e.nextElementSibling;
  mark = e.querySelector('span');
  originalHeight = `${panel.scrollHeight}px`;

  if (panel.style.height === originalHeight) {
    panel.style.height = '';
  } else {
    panel.style.height = originalHeight;
  }
  mark.classList.toggle('accordion-active');
}

const setAccordions = () => {
  let accordions = document.querySelectorAll('.accordion');
  for (let accordion of accordions) {
    accordion.querySelector('.accordion-head').setAttribute('onclick', 'openCloseAccordion(this)');
  }
}

setAccordions();