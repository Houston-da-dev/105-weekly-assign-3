const images = ["images/paper.webp", "images/rock.webp", "images/scissors.webp"];

function changePhoto() {
    const playerimg = document.getElementById("playerimg");
    playerimg.src = images[0];
}

changePhoto();