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

}


//Galarie anzeigen

function renderimages(){

    let container = document.getElementById('gallery');

    for (let index = 0; index < photoimages.length; index++) {
        
        container.innerHTML += /*html*/`
        <figure>
            <img src="./assets/img/${photoimages[index]}" alt="${photoimages[index]}"
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
    let title = document.getAnimations("dialog_header");
    let image = document.getElementById("image-center");
    let navigation = document.getElementById("image-navigation");
    
    title.innerHTML = photoimages[currentImage];
} {
    
}







