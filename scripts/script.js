document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider', {
        cover: true,
        heightRatio: 0.5,
        arrows: false
    } ).mount();
});

let toggles = document.querySelectorAll(".toggle");

for (var i = 0; i < toggles.length; i++) {
    toggles[i].onclick = function(){
        document.querySelector('.first__menu__burger').classList.toggle('open-menu');
        document.querySelector('.first__menu__burger__list').classList.toggle('open-menu');
        document.querySelector('.first__menu__burger').classList.toggle('white-burger');
        document.querySelector('body').classList.toggle('block-scroll');
      };
}