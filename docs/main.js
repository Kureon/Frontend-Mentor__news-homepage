const navToggle = document.getElementById("nav-toggle")
const navigation = document.getElementById("navigation")

navToggle.addEventListener("click", function() {
    navigation.classList.add("open")
    console.log("button clicked")
})