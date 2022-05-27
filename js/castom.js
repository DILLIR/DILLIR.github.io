$(document).ready(function(){
    $('.feedback__cover').slick({
        dots: true,
        responsive: [
            {
            breakpoint: 900,
            settings: {
                arrows: false,
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