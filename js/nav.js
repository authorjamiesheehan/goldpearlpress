var menu_icon
var nav

document.addEventListener("DOMContentLoaded", function () {
    menu_icon = document.getElementById("menu_icon");
    var navs = document.getElementsByClassName('main_nav');
    nav = navs[0]

});

function toggle_menu()
{
    menu_icon.classList.toggle("rotate45deg");
    nav.classList.toggle("expanded_nav");
}