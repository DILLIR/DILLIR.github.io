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
    }
}


