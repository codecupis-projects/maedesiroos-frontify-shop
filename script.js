const slides=document.querySelector(".slides");
const slideCount=slides.children.length;
let index=0;

function showslide(){
    index=(index+1)%slideCount;
    slides.style.transform=`translateX(${-index*100}%)`;
}

setInterval(showslide,5000);

function changeslide(n){
    index +=n-1;
    showslide();
}