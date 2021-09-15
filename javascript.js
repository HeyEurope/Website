const landingPage = document.querySelector(".landingPage");

const sections = document.getElementsByClassName("section");

const header = document.querySelector("header");

const introPage = document.getElementById("intro");

const introLi = introPage.getElementsByTagName("li");

let globalIfReloaded = false;


window.addEventListener("load", () => {
    if (window.innerWidth > window.screen.width && globalIfReloaded == false) {
        console.log(window.innerWidth, window.screen.width);
        globalIfReloaded = true;
        window.location.reload();

    }

});



let setHeight = () => {
    if (window.innerWidth > 500) {
        landingPage.style.minHeight = window.innerHeight + "px";
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.minHeight = window.innerHeight + "px";

        }

    } else {
        landingPage.style.minHeight = window.innerHeight + "px";
        landingPage.style.height = "auto";
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.minHeight = window.innerHeight / 2 + "px";
            sections[i].style.height = "auto";

        }
    }

}

setHeight();

document.addEventListener("resize", function () {

    setHeight();

})

document.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        header.style.background = "#fafafa";
        header.style.boxShadow = "0px 0px 50px 1px #000, -100px 0px 1000px 100px inset #00b4d80a, 100px 0px 1000px 100px inset #27fb6a0e";
    } else {
        header.style.background = "transparent";
        header.style.boxShadow = "none";
    }
})


const paddingSize = 50;

const actionsToggled = "restart pause pause pause";

if (window.innerWidth > 1220) {

    gsap.to(introLi[0], {
        scrollTrigger: {
            trigger: introLi[0],
            // scrub: 0.5,
            // start: "top center",
            // end: "center center",
            toggleActions: actionsToggled,
        },
        y: paddingSize,
        duration: 1,
    })
    gsap.to(introLi[1], {
        scrollTrigger: {
            trigger: introLi[1],
            // scrub: 0.5,
            // start: "top center",
            // end: "center center",
            toggleActions: actionsToggled,
        },
        y: -paddingSize,
        duration: 1,
    })
    gsap.to(introLi[2], {
        scrollTrigger: {
            trigger: introLi[2],
            // scrub: 0.5,
            // start: "top center",
            // end: "center center",
            toggleActions: actionsToggled,
        },
        y: paddingSize,
        duration: 1,
    })
    gsap.to(introLi[3], {
        scrollTrigger: {
            trigger: introLi[3],
            // scrub: 0.5,
            // start: "top center",
            // end: "center center",
            toggleActions: actionsToggled,
        },
        y: -paddingSize,
        duration: 1,
    })
}


