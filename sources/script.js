let canciones = [
    "can´t catch me now.mp3",
    "Three Days Grace - I Hate Everything About You (Official Video).mp3",
    "Three Days Grace - Pain.mp3",
    "Gun.mp3",
    "Agora Hills.mp3",
    "TUS MENTIRAS - GRUPO CUMBIA NOVA OFICIAL.mp3",
    "Charli xcx - Guess featuring Billie Eilish (official video).mp3",
    "Disturbed - Down with the Sickness [Official Audio].mp3",
    "Given Up.mp3"
];

let imagenes = [
    "olivia.png",
    "three i hate.jpg",
    "three i hate.jpg",
    "gun.jpg",
    "agora.jpg",
    "images.jpg",
    "charlie.jpg",
    "down.jpg",
    "Given.jpg"
];

let posicion = 0;

let audio = document.getElementById("audio");
let titulo = document.getElementById("titulo");
let lista = document.getElementById("lista");
let progreso = document.getElementById("progreso");
let portada = document.getElementById("portada");

// Mostrar canciones
for (let i = 0; i < canciones.length; i++) {
    lista.innerHTML +=
        "<li onclick='seleccionar(" + i + ")'>" +
        canciones[i] + "</li>";
}

// Cargar primera canción
audio.src = "../musica/" + canciones[0];

// Reproducir o pausar
function reproducir() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Mostrar imagen de la canción
audio.onplay = function() {
    portada.src = "../src/" + imagenes[posicion];
};

// Cambiar imagen cuando se pausa
audio.onpause = function() {
    portada.src = "../src/images.jpg";
};

// Cambiar canción
function cambiarCancion() {
    audio.src = "../musica/" + canciones[posicion];
    titulo.textContent = canciones[posicion];
    portada.src = "../src/" + imagenes[posicion];
    progreso.value = 0;
    audio.play();
}

// Siguiente canción
function siguiente() {
    posicion++;

    if (posicion >= canciones.length) {
        posicion = 0;
    }

    cambiarCancion();
}

// Canción anterior
function anterior() {
    posicion--;

    if (posicion < 0) {
        posicion = canciones.length - 1;
    }

    cambiarCancion();
}

// Seleccionar canción
function seleccionar(numero) {
    posicion = numero;
    cambiarCancion();
}

// Actualizar barra de progreso
audio.ontimeupdate = function() {
    if (audio.duration > 0) {
        progreso.value =
            (audio.currentTime / audio.duration) * 100;
    }
};

// Adelantar o retroceder
function moverCancion() {
    if (audio.duration > 0) {
        audio.currentTime =
            (progreso.value / 100) * audio.duration;
    }
}

// Siguiente canción al terminar
audio.onended = function() {
    siguiente();
};
