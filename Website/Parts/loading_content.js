$(document).ready( function() {
    $("#category2").on("click", function() {
        $("#content").load("Parts/items.html");
    });
    $("#category1").on("click", function() {
        $("#content").load("Parts/items.html");
    });
    $("#home").on("click", function() {
        load_home();
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
    $("#catManager").on("click", function() {
        $("#content").load("Parts/category_manager.html");
    });
    $("#prodManager").on("click", function() {
        $("#content").load("Parts/items_manager.html");
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

function showOrderInfo() {
    var node1 = document.getElementById('closeOrderInfo');
    var node2 = document.getElementById('openOrderInfo');
    var display = document.getElementById('orderInfoDetail');
    if(node2.style.display == "inline"){
        node2.style.display ='none';
        node1.style.display ='inline';
        display.style.display ='inline';
    }else{
        node1.style.display ='none';
        node2.style.display ='inline';
        display.style.display ='none';
    }
}

function addProduct() {
    var node1 = document.getElementById('addItem');
    var node2 = document.getElementById('findItem');
    var node3 = document.getElementById('searchColumItem');
    if(node1.style.display == "inline"){
        node1.style.display ='none';
    }else{
        node1.style.display ='inline';
    }
    node2.style.display ='none';
    node3.style.display ='none';
}

function productManager() {
    var node1 = document.getElementById('addItem');
    var node2 = document.getElementById('findItem');
    var node3 = document.getElementById('searchColumItem');
    if(node2.style.display == "inline"){
        node2.style.display ='none';
    }else{
        node2.style.display ='inline';
    }
    node1.style.display ='none';
    node3.style.display ='none';
}

function searchForProduct() {
    var node = document.getElementById('searchColumItem');
    node.style.display ='inline';
}