const url="https://source.unsplash.com/random/";
const container = document.querySelector(".container");

rows=6;

for(let i=0;i<rows*4;i++){
    let img=document.createElement("img");
    img.src=`${url}${getRandomNr()}x${getRandomNr()}`;
    container.appendChild(img);
}

function getRandomNr(){
    return Math.floor(Math.random() *10)+200;
}