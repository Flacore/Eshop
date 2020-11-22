$(document).ready( function() {
    $("#category").on("click", function() {
        $("#content").load("Parts/items.html");
    });
    $("#home").on("click", function() {
        $("#content").load("Parts/home.html");
    });
    $("#shopingCart").on("click", function() {
        $("#content").load("Parts/shoping_cart.html");
    });
    $("#registration").on("click", function() {
        $("#content").load("Parts/registrate.html");
    });
    $("#orders").on("click", function() {
        $("#content").load("Parts/orderOverview.html");
    });
    $("#settings").on("click", function() {
        $("#content").load("Parts/settings.html");
    });
});

function load_home() {
    $("#content").load("Parts/home.html");
}

function finishOrder() {
    $("#content").load("Parts/buy.html");
}

function showList() {
    var node = document.getElementById('subcategoryList')
    var text = document.getElementById('showListText')
    var visibility = node.style.display;
    if(visibility == "inline"){
        node.style.display = 'none';
        text.innerText='Zobrazit podkategorie ⇓';
    }else{
        node.style.display = 'inline';
        text.innerText='Zobrazit podkategorie ⇑';
    }
}

function showPassChange() {
    var node = document.getElementById('passChange')
    var text = document.getElementById('passChangeText')
    var visibility = node.style.display;
    if(visibility == "inline"){
        node.style.display = 'none';
        text.innerText='Zmeniť Heslo ⇓';
    }else{
        node.style.display = 'inline';
        text.innerText='Zmeniť Hesl ⇑';
    }
}

function showInfoChange() {
    var node = document.getElementById('infoChange')
    var text = document.getElementById('infoChangeText')
    var visibility = node.style.display;
    if(visibility == "inline"){
        node.style.display = 'none';
        text.innerText='Zmeniť Osobné Informácia ⇓';
    }else{
        node.style.display = 'inline';
        text.innerText='Zmeniť Osobné Informácia ⇑';
    }
}
