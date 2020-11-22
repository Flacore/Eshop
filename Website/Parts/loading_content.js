$(document).ready( function() {
    $("#category").on("click", function() {
        $("#content").load("Parts/items.html");
    });
    $("#home").on("click", function() {
        $("#content").load("Parts/home.html");
    });
});


function load_home() {
    $("#content").load("Parts/home.html");
}
