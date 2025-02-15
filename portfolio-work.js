document.addEventListener("DOMContentLoaded", function(){

    let mid = document.querySelector(".mid");
    let aboutBtn = document.querySelector(".aboutBtn");
    let linkedinBtn = document.querySelector("#linkedin");
    let emailBtn = document.querySelector("#email");
    let githubBtn = document.querySelector("#github");

    let livePreviewWeatherAppBtn = document.querySelector("#live-preview-weatherapp");
    let viewCodeWeatherAppBtn = document.querySelector("#view-code-weatherapp");

    let livePreviewAgendaBtn = document.querySelector("#live-preview-agenda");
    let viewCodeAgendaBtn = document.querySelector("#view-code-agenda");

    let livePreviewAIrecipe = document.querySelector("#live-preview-AIrecipe");
    let viewCodeAIrecipe = document.querySelector("#view-code-AIrecipe");

    let livePreviewFurnBtn = document.querySelector("#live-preview-furniture");
    let viewCodeFurnBtn = document.querySelector("#view-code-furniture");

/*--------------PAGE CHANGE FUNCTIONALITY--------------*/
    aboutBtn.addEventListener("click", function(){
        linkedinBtn.style.transform = "translateX(-2000px)";
        emailBtn.style.transform = "translateX(-2000px)";
        githubBtn.style.transform = "translateX(-2000px)";
        mid.style.transform = "translateX(-2000px)";

        linkedinBtn.style.transition= "300ms";
        emailBtn.style.transition = "300ms";
        githubBtn.style.transition="300ms";
        mid.style.transition = "700ms";
        setTimeout(() => {
            location.replace("portfolio-about.html")
        }, 200);

    })

/*--------------LINKEDIN FUNCTIONALITY--------------*/
    linkedinBtn.addEventListener("mouseover", Lhover, false);
    linkedinBtn.addEventListener("mouseout", LhoverAfter, false);


    function Lhover(){
        linkedinBtn.className = "fa-solid fa-arrow-up-right-from-square";
        linkedinBtn.style.width = "70px";
        linkedinBtn.style.transition = "200ms";
    }

    function LhoverAfter(){
        linkedinBtn.className = "fa-brands fa-linkedin";
        linkedinBtn.style.width = "50px";
    }
    linkedinBtn.addEventListener("click", function(){
        window.open("https://www.linkedin.com/in/phoevos-maniski-73392b25b/")
    });



/*--------------EMAIL FUNCTIONALITY--------------*/
    emailBtn.addEventListener("mouseover", Ehover, false);
    emailBtn.addEventListener("mouseout", EhoverAfter, false);

    function Ehover(){
        emailBtn.className = "fa-solid fa-envelope-open";
        emailBtn.style.height= "70px";
        emailBtn.style.transition = "200ms";
    }

    function EhoverAfter(){
        emailBtn.className = "fa-solid fa-envelope";
        emailBtn.style.height = "50px";
        emailBtn.style.width = "50px";
    }

/*--------------GITHUB FUNCTIONALITY--------------*/
    githubBtn.addEventListener("mouseover", Ghover, false);
    githubBtn.addEventListener("mouseout", GhoverAfter, false);

    function Ghover(){
        githubBtn.className = "fa-brands fa-github";
        githubBtn.style.height = "70px";
        githubBtn.style.width = "70px";
        githubBtn.style.transition = "200ms";

    }

    function GhoverAfter(){
        githubBtn.className = "fa-brands fa-github";
        githubBtn.style.height = "50px";
        githubBtn.style.width = "50px";
    }

    githubBtn.addEventListener("click", function(){
        window.open("https://github.com/phoevo")
    })

/*-------------------WORK VIEWING FUNCTIONALITY--------------*/



    livePreviewWeatherAppBtn.addEventListener("click", function(){
        window.open("https://phoevo.github.io/weather-app/")
    })

    viewCodeWeatherAppBtn.addEventListener("click", function(){
        window.open("https://github.com/phoevo/weather-app")
    })

   livePreviewAgendaBtn.addEventListener("click", function(){
        window.open("https://phoevo.github.io/to-do/")
    })

    viewCodeAgendaBtn.addEventListener("click", function(){
        window.open("https://github.com/phoevo/to-do/tree/main")
    })


    /*
    livePreviewAIrecipe.addEventListener("click", function(){
    })
    */

    viewCodeAIrecipe.addEventListener("click", function(){
        window.open("https://github.com/phoevo/recipe-app")
    })

    livePreviewFurnBtn.addEventListener("click", function(){
        window.open("https://phoevo.github.io/furniture-shop/")
    })

    viewCodeFurnBtn.addEventListener("click", function(){
        window.open("https://github.com/phoevo/furniture-shop")
    })




})
