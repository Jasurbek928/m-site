const gallery = () => {
  let galleries = document.querySelectorAll('.gallery');
  
  for (let gallery of galleries) {
    for (let image of gallery.children) {
      image.setAttribute('onclick', 'changeSlide(this)');
    }

    gallery.children[0].classList.add('active');

    let src = gallery.querySelectorAll('img')[0].getAttribute('src');
    gallery.innerHTML = `
    <div class="gallery-modal">
      <div class="gallery-closer" onclick="closeModal(this)">&times</div>
      <div class="gallery-prev" onclick="prevSlide(this)">&#10094</div>
      <div class="gallery-slide" onclick="openModal(this)" style="background-image: url('${src}')"></div>
      <div class="gallery-next" onclick="nextSlide(this)">&#10095</div>
    </div>
    <div class="gallery-thumb">
      ${gallery.innerHTML}
    </div>
    `;
  }
}

const getStyle = e => {
  let closer, prev, slide, next, modal;
  closer = e.parentNode.querySelector('.gallery-closer').style;
  prev = e.parentNode.querySelector('.gallery-prev').style;
  slide = e.parentNode.querySelector('.gallery-slide').style;
  next = e.parentNode.querySelector('.gallery-next').style;
  modal = e.parentNode.style;
  return {closer, prev, slide, next, modal};
}

const openModal = e => {
  let {closer, prev, slide, next, modal} = getStyle(e);

  // if (modal.position === 'fixed') {
  //   closeModal(e);
  // } else {
    closer.display = 'block';
    prev.display = 'block';
    next.display = 'block';
    slide.cursor = 'default';
    slide.backgroundSize = 'contain';
    slide.height = '90%';
    modal.backgroundColor = '#000e';
    modal.position = 'fixed';
    modal.display = 'flex';
    modal.height = '100vh';
    modal.zIndex = '9999';
    modal.margin = '0';
  // }
}

const closeModal = e => {
  let {closer, prev, slide, next, modal} = getStyle(e);
  
  closer.display = '';
  prev.display = '';
  next.display = '';
  slide.cursor = '';
  slide.backgroundSize = '';
  slide.height = '';
  modal.backgroundColor = '';
  modal.position = '';
  modal.display = '';
  modal.height = '';
  modal.zIndex = '';
  modal.margin = '';
}

const changeSlide = e => {
  e.parentNode.parentNode.querySelector('.gallery-slide').setAttribute(
    'style', `background-image: url("${e.getAttribute('src')}")`
  );
  e.parentNode.querySelector('img.active').classList.remove('active');
  e.classList.add('active');
}

const prevSlide = e => {
  let slide, nextParent, sameImage, prevImage;
  slide = e.nextElementSibling;
  nextParent = e.parentNode.nextElementSibling;
  sameImage = nextParent.querySelector(`[src='${slide.style.backgroundImage.slice(5, -2)}']`);
  prevImage = sameImage.previousElementSibling;

  if (prevImage) {
    slide.style.backgroundImage = `url("${prevImage.getAttribute('src')}")`;
  } else {
    let lastImage = nextParent.childElementCount - 1
    slide.style.backgroundImage = `url("${nextParent.children[lastImage].getAttribute('src')}")`;
  }
}

const nextSlide = e => {
  let slide, nextParent, sameImage, nextImage;
  slide = e.previousElementSibling;
  nextParent = e.parentNode.nextElementSibling;
  sameImage = nextParent.querySelector(`[src='${slide.style.backgroundImage.slice(5, -2)}']`);
  nextImage = sameImage.nextElementSibling;

  if (nextImage) {
    slide.style.backgroundImage = `url("${nextImage.getAttribute('src')}")`;
  } else {
    slide.style.backgroundImage = `url("${nextParent.children[0].getAttribute('src')}")`;
  }
}

gallery();