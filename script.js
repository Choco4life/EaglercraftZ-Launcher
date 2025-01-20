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