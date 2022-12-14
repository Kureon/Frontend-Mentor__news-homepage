const primaryHeader = document.querySelector(".primary-header")
const navToggle = document.querySelector(".mobile-nav-toggle")
const navigation = document.querySelector(".primary-navigation")

navToggle.addEventListener("click", function() {

    navigation.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");

    if (navigation.hasAttribute('data-visible') ) {
        navToggle.setAttribute("aria-expanded", true);
    } else {
        navToggle.setAttribute("aria-expanded", false);
    }
});