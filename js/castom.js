$(document).ready(function(){
    $('.feedback__cover').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        responsive: [
            {
            breakpoint: 900,
            settings: {
                infinite: true,
                dots: true
            }
            }]
    });
});

// menu

let menu_mobile = document.querySelector(".menu-mobile"),
    menu__icon = document.querySelectorAll(".menu__icon-mobile"),
    menu__close = document.querySelector(".menu__close");

for(let item of menu__icon){
    item.addEventListener("click", openMenu);
}

menu__close.addEventListener("click", function(){
    menu_mobile.classList.toggle("active-flex");
})

function openMenu(){
    menu_mobile.classList.toggle("active-flex")
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//     });
// });
// });