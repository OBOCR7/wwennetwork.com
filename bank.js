
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})



let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');
let iconCart = document.querySelector('#cart-icon');
let cartTab = document.querySelector('.cartTab');


menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navmenu.classList.toggle('open');
}

iconCart.addEventListener('click', () =>{
    body.classList.taggle('showcart')
})
closeCart.addEventListener('click',() => {
    body.classList.toggle('showcart')
})
