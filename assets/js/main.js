// OWL CAROUSEL
const owlHeight = () => {
    document.querySelector('.owl-stage-outer').style.height =
    `${document.querySelector('.owl-item.active').scrollHeight + 8}px`;
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        smartSpeed: 700,
        animateOut: 'fadeOut'
    });

    owlHeight();

    let owl = document.querySelector('.owl-carousel');
    owl.addEventListener('click', () => { owlHeight() });
    owl.addEventListener('mousemove', () => { owlHeight() });

    document.querySelector('.owl-prev').children[0].innerHTML = `<svg viewBox="0 0 11.3 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="currentColor" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 10.5,10.5 0.5,20.5"></polyline></svg>`;
    document.querySelector('.owl-next').children[0].innerHTML = `<svg viewBox="0 0 11.3 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline fill="none" stroke="currentColor" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 10.5,10.5 0.5,20.5"></polyline></svg>`;
});

// SCROLLING ANIMATE
AOS.init({
    easing: 'ease',
    duration: 1000,
})
