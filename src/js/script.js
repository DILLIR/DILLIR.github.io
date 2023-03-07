$(document).ready(function(){
    $('.feedback__slider').slick({
        infinite: true,
        slidesToShow: 2,
        useTransform: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: false,
                    autoplay: false,
                    slidesToShow: 1,
                }
              }
        ]
    });
  });

// mobile menu         

const menu__icon_open = document.querySelector(".navigation__burger-menu_open");
const menu__icon_close = document.querySelector(".navigation__burger-menu_close");


function openMobileMenu(){
    let menu = document.querySelector(".burger-menu");
    menu.classList.add("burger-menu_active");

    let content = document.querySelector(".content");
    content.classList.add("content_active");

    menu__icon_open.style.visibility = "hidden";
}

function closeMobileMenu(){
    let menu = document.querySelector(".burger-menu");
    menu.classList.remove("burger-menu_active");

    let content = document.querySelector(".content");
    content.classList.remove("content_active");

    menu__icon_open.style.visibility = "visible";
}


menu__icon_open.addEventListener("click", openMobileMenu);
menu__icon_close.addEventListener("click", closeMobileMenu);

const mobile__links = document.querySelectorAll(".burger-menu .menu__link");

for(let item of mobile__links){
    item.addEventListener("click", closeMobileMenu);
}

// portfolio slider 

let flag = 0;

function turnOnSlider(){
    const cases = document.querySelectorAll(".my-works__case");
    const parent = document.querySelector(".my-works .container");
    
    if(!flag){
        const newParent = document.createElement("div");
        flag = 1;
          // Append children of parent2 to the new parent
          for (let child of cases) {
            newParent.appendChild(child);
          }
        
          // Append the new parent to the document
        
          newParent.style.order = -1;
          newParent.classList.add("my-works__column");
          newParent.classList.add("my-works__slider");
        
        
          parent.appendChild(newParent);

          $('.my-works__slider').slick({
            slidesToShow: 1,
            useTransform: false,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          })
    }
}

function turnOffSlider(){
    let temp = document.querySelector(".my-works__slider");
    $(".my-works__slider").slick("unslick")
    const parent = document.querySelector(".my-works .container");
    const cases = document.querySelectorAll(".my-works__case");

    let more = document.querySelector(".my-works__more");

    parent.children[0].insertBefore(cases[0],more);
    parent.children[0].insertBefore(cases[1],more);

    parent.children[1].appendChild(cases[2]);
    parent.children[1].appendChild(cases[3]);


    if(flag){
        temp.remove();
    }
    flag= 0;
}

if(window.innerWidth <= 576)
    turnOnSlider();

window.addEventListener("resize", () => {this.innerWidth <= 576 ? turnOnSlider() : turnOffSlider();})

// translation 

const languages = ["ua", "en"];

function changeLanguageURL(item){
    const {dataset: {language}} = item;
    location.href = window.location.pathname + "#" + language;
}

let lswitchers = document.querySelectorAll(".language__option");


for(let item of lswitchers){
    item.addEventListener("click", function(){
        const active = document.querySelector(".language__option_active");
        if(item != active){
            changeLanguageURL(item);
            active.classList.remove("language__option_active");
            item.classList.add("language__option_active");
            changeLanguage();
        }
    })
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);

    if(!languages.includes(hash)){
        location.href = window.location.pathname + "#en";
        hash = "en";
    }

    let switcher = document.querySelector("[data-language='"+  hash  + "']");
    switcher.classList.add("language__option_active");

    for(let item in langArr){
        let elements = document.querySelectorAll(`.lng-${item}`);
        if(elements){
            for(let item_k of elements){
                item_k.innerHTML = langArr[item][hash];
            }
        }
    }

}

changeLanguage();