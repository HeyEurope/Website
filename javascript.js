const landingPage = document.querySelector(".landingPage");

const sections = document.getElementsByClassName("section");

const header = document.querySelector("header");

const introPage = document.getElementById("intro");

const introLi = introPage.getElementsByTagName("li");

console.log(introLi);

let setHeight = () => {
    if (window.innerWidth > 500) {
        landingPage.style.minHeight = window.innerHeight + "px";
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.minHeight = window.innerHeight + "px";
            console.log("i run");
        }
        console.log(sections);
    } else {
        landingPage.style.minHeight = window.innerHeight + "px";
        landingPage.style.height = "auto";
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.minHeight = window.innerHeight + "px";
            sections[i].style.height = "auto";
            console.log("i run");
        }
    }

}

setHeight();

document.addEventListener("resize", function () {

    setHeight();

})

document.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        header.style.background = "#001c3aff";
        header.style.boxShadow = "0px 0px 50px 1px #000";
    } else {
        header.style.background = "transparent";
        header.style.boxShadow = "none";
    }
})


const paddingSize = 50;

const actionsToggled = "restart pause pause pause";

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