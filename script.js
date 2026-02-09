function playMusic() {
    let music = document.getElementById("music");
    music.play();
    localStorage.setItem("musicPlaying", "true");
}

window.onload = function() {
    let music = document.getElementById("music");
    if (localStorage.getItem("musicPlaying") === "true") {
        music.play();
    }
}
