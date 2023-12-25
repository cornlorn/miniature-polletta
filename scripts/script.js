window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const phrase = document.getElementById("phrase");

    if (loadingScreen) {
        loadingScreen.remove();
    }

    if (phrase) {
        const phrases = [
            "Siempre serás mi babina.",
            "Siempre serás mi stupidina.",
            "Amo cada parte de ti.",
            "Amo tus estupideces.",
            "Amo tus locuras.",
            "Cada día me enamoro más de ti.",
            "Me encanta tu mirada.",
            "Me encanta tu piedino.",
            "Me encanta tu sonrisa.",
            "Recuerda de ir a pipiare.",
            "Recuerda que siempre estaré a tu lado.",
            "Recuerda que siempre puedes contar conmigo.",
            "Te amo, mi angelito.",
            "Te amo, mi princesa.",
            "Te amo, mi vida.",
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
