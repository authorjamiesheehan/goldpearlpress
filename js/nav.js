const menu_icon = document.querySelector('#menu_icon')
const nav = document.querySelector('nav');

function toggle_menu()
{
    menu_icon.classList.toggle("rotate45deg");
    nav.classList.toggle("expanded_nav");
}