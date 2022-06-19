counters= document.querySelectorAll(".counter");

console.log(counters);
counters.forEach( counter => {
    counter.innerText="0";
    
    
    
    (function updateCounter(){
        target = +counter.getAttribute("data-target");
        c= +counter.innerText;    
        increment =  target/200;
        
        if( c < target ){
            counter.innerText=`${Math.ceil(c+increment)}`;
            setTimeout(updateCounter,5);
            
        }else{
            counter.innerText=`${target}`;
        }
        
    })();
})