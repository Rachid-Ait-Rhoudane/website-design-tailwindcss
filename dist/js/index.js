let menuBtn = document.getElementById("menu-button");

let mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle('hidden');
});

window.addEventListener("click", function (e) {
    if(e.target.id !== "mobile-menu" && e.target.id !== "menu-button" && !e.target.classList.contains("link-wrapper") && !e.target.classList.contains("link") ) {
        mobileMenu.classList.add('hidden');
    }
});