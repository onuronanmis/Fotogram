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


function renderimages(){

    let container = document.getElementById('gallery');

    for (let index = 0; index < photoimages.length; index++) {
        
        container.innerHTML += /*html*/`
        <img src="./assets/img/${photoimages[index]}" alt="">
        `
        
    }
}

renderimages();