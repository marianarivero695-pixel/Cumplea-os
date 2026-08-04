const button = document.getElementById("startButton");
const music = document.getElementById("music");
const message = document.getElementById("message");
const text = document.getElementById("text");
const constellation = document.querySelector(".constellation");
const shootingStar = document.querySelector(".shooting-star");


const phrase = 
"Tu cumpleaños nunca será un día cualquiera\n-MR";


button.addEventListener("click", ()=>{


    music.play();


    button.style.display="none";


    message.classList.remove("hidden");


    constellation.classList.remove("hidden");


    shootingStar.classList.add("shooting");



    let i=0;


    function typing(){


        if(i < phrase.length){


            text.innerHTML += phrase[i] === "\n"
            ? "<br>"
            : phrase[i];


            i++;

            setTimeout(typing,90);

        }


    }


    typing();


});
