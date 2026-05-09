// Navbar Scroll Effect

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});

// Active Nav Link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});