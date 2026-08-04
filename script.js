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
            text: "Que nunca te falten motivos para sonreír, personas que te quieran y razones para seguir brillando.\n\nTe deseo siempre lo mejor del mundo."
        },

        {
            time: 155,
            text: "Gracias por ser una persona tan especial. Te quiero."
        },

        {
            time: 195,
            text: "Feliz cumpleaños ✨\n\n-MR"
        }

    ];


    button.addEventListener("click", () => {


        music.play();


        button.style.display = "none";


        message.classList.remove("hidden");
        constellation.classList.remove("hidden");


        startShootingStar();


        let currentMessage = -1;


        music.addEventListener("timeupdate", () => {


            let currentTime = music.currentTime;


            messages.forEach((item, index) => {


                if(currentTime >= item.time && index !== currentMessage){


                    currentMessage = index;

                    showMessage(item.text);


                    if(index === 0 || index === 2 || index === 5){

                        startShootingStar();

                    }


                }


            });


        });


    });



    function showMessage(content){


        text.classList.remove("show");


        setTimeout(()=>{


            text.innerHTML = content.replace(/\n/g, "<br>");

            text.classList.add("show");


        },700);



    }



    function startShootingStar(){


        shootingStar.classList.remove("shooting");


        void shootingStar.offsetWidth;


        shootingStar.classList.add("shooting");


    }


});
