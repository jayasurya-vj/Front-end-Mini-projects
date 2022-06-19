input = document.querySelector('input');
text = document.querySelector('h1');

speed = 300/input.value;
idx=1;
content = "Hey, This is Jayasurya!"

writeText();

function writeText(){
    text.innerText=content.slice(0,idx);
    
    if(++idx>content.length){
        idx=1;
    }
    
    setTimeout(writeText,speed);
}

input.onchange= (e) => speed=300/e.target.value;