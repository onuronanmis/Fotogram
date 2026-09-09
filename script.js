const photoimages = [
    "Alaska.webp",
    "Anime.webp",
    "Atmosphere.webp",
    "Blue-tit.webp",
    "Hurricane.webp",
    "Lake.webp",
    "Moorente.webp",
    "Sea.webp",
    "Snow-Bunting.webp",
    "Snow-Leopard-Cubs.webp",
    "Travel.webp",
    "Winter.webp",
];

let currentImage = 0;

//onload init
function init(){
    renderimages();
    document.getElementById("next-image").addEventListener("click", nextImages);
    document.getElementById("previous-image").addEventListener("click", previousImage);
    document.getElementById("close_dialog").addEventListener("click", closeDialog);
}


//Galarie anzeigen

function renderimages(){

    let container = document.getElementById('gallery');

    for (let index = 0; index < photoimages.length; index++) {
        
        container.innerHTML += /*html*/`
        <figure>
            <img tabindex="0" src="./assets/img/${photoimages[index]}" alt="${photoimages[index]}"
        onclick = "openDialog(${index})">
        </figure>
        
        `
    }
}

// dialog öfnen

function openDialog(index) {
    currentImage = index;

    let dialog = document.getElementById('open_dialog')

    showImage();
    dialog.showModal()
}

//dialog fenster anzeigen

function showImage(){
    let title = document.getElementById("image_title");
    let image = document.getElementById("image-center");
    let navigation = document.getElementById("counter");
    
    title.innerHTML = photoimages[currentImage];
    image.src = `./assets/img/${photoimages[currentImage]}`;
    navigation.innerHTML = (currentImage +1) +" / " + photoimages.length;
} 

//rechts klick

function nextImages() {
    currentImage++;

    if (currentImage >= photoimages.length) {
        currentImage = 0;
    }
    showImage();
}

// links klick

function previousImage() {
    currentImage--;

    if (currentImage < 0 ) {
        currentImage = photoimages.length -1;
    }
    showImage()
}

// dialog schließen

function closeDialog() {
    document.getElementById("open_dialog").close();
    
}







