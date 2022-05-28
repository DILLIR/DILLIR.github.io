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