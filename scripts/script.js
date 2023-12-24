function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function typePhrase(phrase, targetElement, speed = 50) {
    let i = 0;
    const fragment = document.createDocumentFragment();

    function type() {
        if (i < phrase.length) {
            const char = document.createTextNode(phrase.charAt(i));
            fragment.appendChild(char);
            targetElement.appendChild(fragment);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

function randomizeChildrenOrder(parentSelector) {
    const parent = document.querySelector(parentSelector);
    const children = Array.from(parent.children);

    for (let i = children.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [children[i], children[j]] = [children[j], children[i]];
    }

    children.forEach(child => {
        parent.appendChild(child);
    });
}

const phrases = [
    "Mi felicidad es tener tu nombre en mi corazón.",
    "Pienso en ti desde que me despierto hasta que me duermo.",
    "Te amo, mi amor.",
    "Te amo, mi vida.",
    "Te amo, mi ángel.",
    "Te amo, mi princesa.",
    "Te amo, mi reina.",
    "Mi vida solo tiene sentido si estás a mi lado.",
    "Me robaste el corazón y estaré eternamente agradecido por eso.",
    "En tus ojos puedo ver un futuro maravilloso a tu lado.",
    "Nada en este mundo me hace más feliz que estar a tu lado.",
    "Siento que mi corazón está completo si te tengo.",
    "Amo tu sonrisa. Amo tu mirada. Pero sobre todo, tus pies.",
    "Amo cada parte de ti.",
    "Eres la mujer más hermosa del mundo.",
    "Amo tus estupideces.",
    "A pesar de la distancia, sigo pensando en ti y esperando con ansias el momento en que nos veamos.",
    "Eres la mujer de mis sueños.",
    "Eres la mujer de mi vida.",
    "Eres la mujer que quiero a mi lado por el resto de mi vida.",
    "Eres mi persona favorita en todo el mundo.",
    "Estar contigo es mi mayor alegría.",
    "Eres mi hogar. A tu lado, me siento completo y seguro.",
    "Eres la mujer de mi vida. Eres mi cielo en la tierra.",
    "Incluso cuando no estamos juntos, mi corazón se llena de alegría solo de pensar en ti.",
    "Fuimos hechos el uno para el otro.",
    "Contigo, el tiempo se detiene y el mundo desaparece.",
    "Espero cambies y seas completamente mía.",
    "Ricordati di andare a pipiare.",
    "Misso il tuo piedino."
];

const targetElement = document.querySelector("#phrase");

function onLoadHandler() {
    randomizeChildrenOrder('.photo-container');

    const loadScreen = document.querySelector('.loading-screen');
    loadScreen.style.opacity = '0';
    loadScreen.style.visibility = 'hidden';

    const randomIndex = getRandomIndex(phrases);
    const randomPhrase = phrases[randomIndex];

    typePhrase(randomPhrase, targetElement);
}

window.addEventListener('load', onLoadHandler);
