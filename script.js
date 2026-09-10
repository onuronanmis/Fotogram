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

const photoDiscription  = [
"Wunderschöne Landschaft in Alaska",
"Anime-Illustration",
"Schwarze Wolken",
"Blauer Vogel auf einem Ast",
"Hurrikan von oben",
"Wunderschöner See",
"Moorente im See",
"Blick aufs Meer",
"Schnee Vogel auf einem Stein",
"Schneeleopardenjunge",
"Wunder schöne Berglandschaft",
"Winterlandschaft",
]

let currentImage = 0;

//onload init
function init(){
    renderimages();
    eventListener();
}

// event listen
function eventListener() {  
    document.getElementById("next-image").addEventListener("click", nextImages);
    document.getElementById("previous-image").addEventListener("click", previousImage);
    document.getElementById("close_dialog").addEventListener("click", closeDialog);
    document.getElementById("open_dialog").addEventListener("click", closeDialogOutside);
    document.getElementById("gallery").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.target.click();
    }
});
    
}


//Galarie anzeigen

function renderimages(){

    let container = document.getElementById('gallery');

    for (let index = 0; index < photoimages.length; index++) {
        
        container.innerHTML += getNotesHtml(index)
        }


    }
// Template Html

function getNotesHtml(index) {
    return /*html*/`
        <figure>
            <img tabindex="0" 
            src="./assets/img/${photoimages[index]}"
            alt="${photoDiscription[index]}"
            onclick = "openDialog(${index})"        >
        </figure>
        
        `
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
    let counter = document.getElementById("counter");
    
    title.innerHTML = photoimages[currentImage];
    image.src = `./assets/img/${photoimages[currentImage]}`;
    counter.innerHTML = (currentImage +1) +" / " + photoimages.length;
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
// schleißen mit 

function closeDialogOutside(event){

    if (event.target.id === "open_dialog") {
        closeDialog();
    }
}





