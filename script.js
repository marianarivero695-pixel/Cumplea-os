document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("startButton");
    const music = document.getElementById("music");
    const message = document.getElementById("message");
    const text = document.getElementById("text");
    const constellation = document.querySelector(".constellation");
    const shootingStar = document.querySelector(".shooting-star");


    const messages = [

        {
            time: 5,
            text: "Tu cumpleaños nunca será un día cualquiera"
        },

        {
            time: 25,
            text: "Porque hay personas que llegan a nuestras vidas y hacen que los días normales se conviertan en recuerdos inolvidables."
        },

        {
            time: 60,
            text: "Hoy no solo celebramos una fecha... celebramos tu existencia, tus momentos, tus sueños y todo lo bonito que todavía está por venir."
        },

        {
            time: 105,
            text: "Que nunca te falten motivos para sonreír, personas que te quieran y razones para seguir brillando.<br><br>Te deseo siempre lo mejor del mundo."
        },

        {
            time: 155,
            text: "Gracias por ser una persona tan especial. Te quiero."
        },

        {
            time: 195,
            text: "Feliz cumpleaños ✨<br><br>-MR"
        }

    ];


    let currentMessage = -1;



    button.addEventListener("click", () => {


        music.play();


        button.style.display = "none";


        message.classList.remove("hidden");

        constellation.classList.remove("hidden");


        showShootingStar();



        music.addEventListener("timeupdate", () => {


            messages.forEach((item, index) => {


                if(
                    music.currentTime >= item.time &&
                    index !== currentMessage
                ){

                    currentMessage = index;

                    showMessage(item.text);


                    if(index === 0 || index === 3 || index === 5){

                        showShootingStar();

                    }

                }


            });


        });



    });



    function showMessage(content){


        text.classList.remove("show");


        setTimeout(typing,85);


            text.innerHTML = "";
text.classList.add("show");

setTimeout(() => {
    typeText(content);
}, 300);


    }




    function typeText(content){


        let cleanText = content.replace(/<br><br>/g,"\n");

        let i = 0;


        function typing(){


            if(i < cleanText.length){


                if(cleanText[i] === "\n"){

                    text.innerHTML += "<br><br>";

                }else{

                    text.innerHTML += cleanText[i];

                }


                i++;


                setTimeout(typing,50);


            }


        }


        typing();


    }





    function showShootingStar(){


        shootingStar.classList.remove("shooting");

        void shootingStar.offsetWidth;

        shootingStar.classList.add("shooting");


    }




    music.addEventListener("ended", () => {


        text.classList.remove("show");


        setTimeout(()=>{


            text.innerHTML =
            "Siempre recuerda lo especial que eres ✨";


            text.classList.add("show");



        },800);



        setTimeout(()=>{


            text.classList.remove("show");



            setTimeout(()=>{


                text.innerHTML =
                "Gracias por existir.<br><br>-MR";


                text.classList.add("show");


                createStars();


            },800);



        },5000);



    });




    function createStars(){


        for(let i = 0; i < 40; i++){


            let star = document.createElement("div");


            star.className = "falling-star";


            star.style.left =
            Math.random()*100 + "%";


            star.style.animationDelay =
            Math.random()*3 + "s";


            document.body.appendChild(star);


        }


    }



});
