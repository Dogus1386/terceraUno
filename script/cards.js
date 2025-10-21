console.log("Cards Cargado");

const dataCards = [
    {
        "title": "Juego del año",
        "url_image": "./img/bolsodia.png",
        "desc": "El mas vendido segun la revista morales.",
        "cta": "Mostrar más...",
        "link": "./dia.php"
    },
    {
        "title": "Xbox",
        "url_image": "./img/bolsonoche.png",
        "desc": "Variedad de Exclusivos",
        "cta": "Mostrar más...",
        "link": "./noche.php"
    },
    {
        "title": "Playstation",
        "url_image": "./img/bolsoverano.jpg",
        "desc": "Nueva Temporada",
        "cta": "Mostrar más...",
        "link": "./verano.php"
    }
];

(function () {
    let CARD = {

        init: function() {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function(_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item,index));
            })
        },

        tplCardItem: function(item, index) {
            return(`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class='card-title'>${item.title}</p>
                    <p class='card-desc'>${item.desc}</p>
                    <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                </div>
            </div>`)
        },
    }
    CARD.init();
})();