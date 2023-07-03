const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLink = document.querySelector('.btn');
const iconClose = document.querySelector('.icons-close');

registerLink.addEventListener('click', ()=>{
    container.classList.add("active");
});
loginLink.addEventListener('click', ()=>{
    container.classList.remove("active");
});
btnLink.addEventListener('click', ()=>{
    container.classList.add("active-btn");
});
iconClose.addEventListener('click', ()=>{
    container.classList.remove("active-btn");
});

const sideLinks = document.getElementById("sideLinks");
function showMenu(){
    sideLinks.style.right = "0"
}
function hideMenu(){
    sideLinks.style.right = "-100px"
}