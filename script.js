
document.addEventListener("DOMContentLoaded", function () {
    const iconeMenuMobile = document.getElementById("mobile-menu-icon");
    const menuMobile = document.getElementById("mobile-menu");

    iconeMenuMobile.addEventListener("click", function () {
        menuMobile.style.display = menuMobile.style.display === "flex" ? "none" : "flex";
    });

    const itensMenuMobile = document.querySelectorAll("#mobile-menu a");
    itensMenuMobile.forEach(function (item) {
        item.addEventListener("click", function () {
            menuMobile.style.display = "none";
        });
    });
});
