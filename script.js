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
            text: "Tu cumpleaños nunca será un día cualquiera<br><br>-MR"
        },

        {
            time: 35,
            text: "Porque hay personas que llegan a nuestras vidas y hacen que los días normales se conviertan en recuerdos inolvidables."
        },

        {
            time: 80,
            text: "Hoy no solo celebramos una fecha... celebramos tu existencia, tus momentos, tus sueños y todo lo bonito que todavía está por venir."
        },

        {
            time: 135,
            text: "Que nunca te falten motivos para sonreír, personas que te quieran y razones para seguir brillando.<br><br>Te deseo siempre lo mejor del mundo."
        },

        {
            time: 200,
            text: "Gracias por ser una persona tan especial. Te quiero."
        },

        {
            time: 250,
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

        setTimeout(() => {

            text.innerHTML = content;

            text.classList.add("show");

        },500);

    }



    function showShootingStar(){

        shootingStar.classList.remove("shooting");

        void shootingStar.offsetWidth;

        shootingStar.classList.add("shooting");

    }



    music.addEventListener("ended", () => {

        text.innerHTML =
        "Siempre recuerda lo especial que eres ✨";

        text.classList.add("show");


        setTimeout(() => {

            text.innerHTML =
            "Gracias por existir.<br><br>-MR";

        },5000);

    });


});
