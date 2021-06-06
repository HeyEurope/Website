const landingPage = document.getElementsByClassName("landingPage")[0];

//const hiLanding = landingPage.getElementsByClassName("text")[0];


landingPage.style.height = window.innerHeight + "px";

landingPage.style.color = "#000";



document.addEventListener("resize",function(){
    
landingPage.style.height = window.innerHeight + "px";

})