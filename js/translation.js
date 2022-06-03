let selected = document.querySelector(".lng-selected");
let langs = document.querySelectorAll(".language span");

for(let item of langs){
    item.addEventListener("click", function(){
        for(let it of langs){ it.classList.remove("lng-selected")};
        item.classList.add("lng-selected");
        selected = item;
        changeUrl();
        for (let key in lng_data){
            document.querySelector(".lng-" + key).innerHTML = lng_data[key][selected.dataset.lng]
        }
    });
}

window.addEventListener("load", changeUrl)

function changeUrl(){
    let lang = selected.dataset.lng;
    location.href = window.location.pathname + "#" + lang;
}


let lng_data = {
    "header__heading": {
        "ua" : "Створення різних сайтів<br> і не тільки",
        "us" : "Creating different sites <br> and more"
    },
    "menu__item-1": {
        "ua" : "Головна",
        "us" : "Main"
    },
    "menu__item-2": {
        "ua" : "Послуги",
        "us" : "Services"
    },
    "menu__item-3": {
        "ua" : "Портфоліо",
        "us" : "Portfolio"
    },
    "menu__item-4": {
        "ua" : "Контакти",
        "us" : "Contacts"
    },
    "button-1": {
        "ua" : "Послуги",
        "us" : "Services"
    },
    "button-2" : {
        "ua" : "Контакти",
        "us" : "Contacts"
    },
    "pluse_h-1" : {
        "ua" : "КОМУНІКАБЕЛЬНІСТЬ",
        "us" : "COMMUNICATION"
    },
    "pluse_h-2" : {
        "ua" : "ЕФЕКТИВНІСТЬ",
        "us" : "EFFICIENCY"
    },
    "pluse_h-3" : {
        "ua" : "ГНУЧКІСТЬ",
        "us" : "FLEXIBILITY"
    },
    "pluse_h-4" : {
        "ua" : "ШВИДКІСТЬ",
        "us" : "SPEED"
    },
    "pluse_t-1" : {
        "ua" : "Зв'яжіться зі мною і я відповім Вам протягом години.",
        "us" : "Contact me and I will answer you within an hour."
    },
    "pluse_t-2" : {
        "ua" : "Я завжди намагаюсь оптимізувати виконання роботи.",
        "us" : "I always try to optimize the performance."
    },
    "pluse_t-3" : {
        "ua" : "Я завжди прислухаюся до побажань клієнта під час виконання роботи.",
        "us" : "I always listen to the wishes of the client during the work."
    },
    "pluse_t-4" : {
        "ua" : "Швидкість виконання робіт порадувала не одного мого клієнта.",
        "us" : "The speed of work pleased many of my clients."
    },
    "skills_h" : {
        "ua" : "Веб-програмування",
        "us" : "Web-development"
    },
    "skills_t-1" : {
        "ua" : "Технології: CSS, HTML, JS, Wordpress",
        "us" : "Technologies: CSS, HTML, JS, Wordpress"
    },
    "skills_t-2" : {
        "ua" : "Landing Page, Промо Сайт, Сайт-Визитка",
        "us" : "Landing Page, Promo Site, Business Card Site"
    },
    "skills_t-3" : {
        "ua" : "Перенесення сайту на інший хостинг",
        "us" : "Transferring the site to another hosting"
    },
    "skills_t-4" : {
        "ua" : "Пошук та усунення несправностей на сайті",
        "us" : "Troubleshooting on the site"
    },
    "skills_t-5" : {
        "ua" : "Допомога в реєстрації домену/хостингу",
        "us" : "Assistance in domain registration / hosting"
    },
    "portfolio_h" : {
        "ua" : "Портфоліо",
        "us" : "Portfolio"
    },
    "comment_1" : {
        "ua" : "Работа сделана быстро. Всегда на связи.",
        "us" : "The work is done quickly. Always in touch."
    },
    "comment_2" : {
        "ua" : "Работа выполнена быстро, учтены все пожелания, хорошая коммуникация. Спасибо!",
        "us" : "The work is done quickly, all wishes are taken into account, good communication. Thank you!"
    },
    "comment_3" : {
        "ua" : "Всё сделано, пожелания учтены + оказаны дополнительно услуги. Рекомендую к сотрудничеству.",
        "us" : "Everything is done, wishes are taken into account + additional services are provided. I recommend cooperation."
    },
    "comment_4" : {
        "ua" : "Юра быстро справился с работой! Очень довольна, рекомендую!",
        "us" : "Yura did a good job! Very happy, I recommend!"
    },
    "footer" : {
        "ua" : "Made by<a href='#wrapper'>  Yurii Syom</a>",
        "us" : "Made by<a href='#wrapper'>  Yurii Syom</a>"
    }
}


