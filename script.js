let menu = document.getElementsByClassName("menu-toggle")[0];
let navLinks = document.getElementsByClassName("nav-links")[0];

menu.addEventListener("click", function() {
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
});