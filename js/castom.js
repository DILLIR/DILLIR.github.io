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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});