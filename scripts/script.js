document.body.style.overflow = "hidden";

window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const phrase = document.getElementById("phrase");

    if (loadingScreen) {
        loadingScreen.remove();
        document.body.style.overflow = "auto";
    }

    if (phrase) {
        const phrases = [
            "Amo cada parte de ti.",
            "Amo cuando te veo sonreír.",
            "Amo cuando te veo.",
            "Amo tus estupideces.",
            "Amo tus locuras.",
            "Cada día me enamoro más de ti.",
            "Contigo quiero despertar cada día de mi vida.",
            "Contigo quiero pasar el resto de mi vida.",
            "Cuando nos veamos, te daré un abrazo.",
            "Cuando nos veamos, te daré un beso.",
            "Deseo tenerte a mi lado.",
            "Deseo tenerte entre mis brazos.",
            "Deseo verte pronto.",
            "Eres la chica más hermosa que he conocido.",
            "Eres muy espcial para mí.",
            "Espero con ansias el día en que nos veamos.",
            "Espero no haberme equivocado esta vez.",
            "Espero que todo sea diferente esta vez.",
            "Espero ver cambios en ti.",
            "Me encanta tu mirada.",
            "Me encanta tu piedino.",
            "Me encanta tu sonrisa.",
            "Pronto estaremos juntos.",
            "Recuerda de ir a pipiare.",
            "Recuerda que siempre estaré a tu lado.",
            "Recuerda que siempre puedes contar conmigo.",
            "Siempre estaré a tu lado.",
            "Siempre serás mi babina.",
            "Siempre serás mi stupidina.",
            "Te amo más que a nada en este mundo.",
            "Te amo, mi angelito.",
            "Te amo, mi princesa.",
            "Te amo, mi vida.",
            "Un beso para ti."
        ];
        const randomIndex = Math.floor(Math.random() * phrases.length);
        const randomPhrase = phrases[randomIndex];

        phrase.innerHTML = "";

        let index = 0;
        const timer = setInterval(function () {
            phrase.innerHTML += randomPhrase[index];
            index++;

            if (index === randomPhrase.length) {
                clearInterval(timer);
            }
        }, 50);
    }

    const photoContainer = document.querySelector(".photo-container");
    const photos = photoContainer.querySelectorAll("img");

    for (let i = 0; i < photos.length; i++) {
        const randomIndex = Math.floor(Math.random() * photos.length);
        const randomPhoto = photos[randomIndex];
        const currentPhoto = photos[i];

        photoContainer.insertBefore(randomPhoto, currentPhoto);
    }
});
