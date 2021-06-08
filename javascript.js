const landingPage = document.querySelector(".landingPage");




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