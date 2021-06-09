const landingPage = document.querySelector(".landingPage");

const header = document.querySelector("header");



let setHeight = () => {
    if (window.innerWidth > 500) {
        landingPage.style.minHeight = window.innerHeight + "px";
    } else {
        landingPage.style.minHeight = window.innerHeight + "px";
        landingPage.style.height = "auto";
    }

}

setHeight();

document.addEventListener("resize", function () {

    setHeight();

})

document.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        header.style.background = "#fafafaea";
    } else {
        header.style.background = "transparent";
    }
})