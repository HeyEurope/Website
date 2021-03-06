const landingPage = document.querySelector(".landingPage");

const sections = document.getElementsByClassName("section");

const header = document.querySelector("header");

const introPage = document.getElementById("intro");

// try {
//     const introLi = introPage.getElementsByTagName("li");
// } finally {

// }


const loadingScreen = document.getElementById("loadingScreen");

const body = document.querySelector("body");


function setCookie(cname, cvalue, exseconds) {
    const d = new Date();
    d.setTime(d.getTime() + (exseconds * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.addEventListener('DOMContentLoaded', () => {


    loadingScreen.style.display = "flex";
    body.style.overflowY = 'hidden';

});


//solution for IE

// window.attachEvent("onload", function() {
//     // loaded
// });

window.addEventListener("load", () => {

    loadingScreen.style.display = "none";
    body.style.overflowY = 'visible';
    // if (window.innerWidth > window.screen.width && getCookie('toReload') === '') {
    //     console.log(window.innerWidth, window.screen.width); String.
    //         setCookie('toReload', 'false', 5);
    //     window.location.reload();

    // }

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
