$(document).ready(function(){
    $('.feedback__cover').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
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

$(document).ready(function(){
    $('.portfolio-mobile').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
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