let hamburger = document.querySelector(".mobile-hamburger");
let mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener('click', () => {
    if (mobileNav.hasClass = "hidden") {
      mobileNav.classList.toggle("hidden");
    } else {
        mobileNav.classList.add('hidden');
    }
});