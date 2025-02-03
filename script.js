const dropdown = document.getElementById('gameSelect');

function play() {
    const selectedPath = dropdown.value;
    if (selectedPath) {
        const newUrl = `${window.location.origin}${window.location.pathname}/${selectedPath}`;
        window.location.href = newUrl;
    }
}

function settings() {
    const popup = document.getElementById('settings-cont');
    const overlay = document.getElementById('overlay');
    if (popup && overlay) {
        overlay.classList.add('visible');
        popup.style.display = 'block';
        requestAnimationFrame(() => {
            popup.classList.add('scale-in');
        });
    }
}

function close() {
    const popup = document.getElementById('settings-cont');
    const overlay = document.getElementById('overlay');
    console.log('close');
    if (popup && overlay) {
        overlay.classList.remove('visible');
        popup.classList.remove('scale-in');
        popup.classList.add('scale-out');
        popup.addEventListener(
            'animationend',
            function onAnimationEnd() {
                popup.style.display = 'none';
                popup.classList.remove('scale-out');
                popup.removeEventListener('animationend', onAnimationEnd);
            }
        );
    }
}

const closeButton = document.getElementById('close-button');

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        close();
    }
});

document.addEventListener('click', (event) => {
    if (event.target === closeButton) {
        close();
    }
});

function openProfile() {
    const profilePopup = document.getElementById('profile-popup');

    profilePopup.style.top = '10px'
    profilePopup.style.height = '175px'

    console.log('openProfile');
}

function closeProfile() {
    const profilePopup = document.getElementById('profile-popup');

    profilePopup.style.top = '-200px'
}

document.addEventListener('click', (event) => {
    if (event.target === closeProfile) {
        closeProfile();
    }
});

window.onload = music;

const audioFiles = [
    "1.mp3",
    "2.mp3",
    "3.mp3",
    "4.mp3"
];

const audio = new Audio();
let isMusicEnabled = true;

function music() {
    if (!isMusicEnabled) return;
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    audio.src = audioFiles[randomIndex];
    audio.play();
} 

audio.addEventListener("ended", music);

function toggleMusic() {
    isMusicEnabled = !isMusicEnabled;
    if (!isMusicEnabled) {
        music();
    } else {
        audio.pause();
    }
}

window.addEventListener('change', event => {
    const musicToggle = document.getElementById('musicToggle');

    if (musicToggle.checked === true) {
        music();
    } else {
        audio.pause();
    }
})