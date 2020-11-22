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
});

function load_home() {
    $("#content").load("Parts/home.html");
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
