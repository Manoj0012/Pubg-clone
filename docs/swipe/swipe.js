const container=document.querySelector('.section5-slider');
const items=document.querySelectorAll('.section5-cards');
let startx=0;
let endx=0;
let index=0;
console.log(items.length);

container.addEventListener('touchstart',(event)=>{
     startx=event.changedTouches[0].screenX;
});

container.addEventListener('touchend',(event)=>{
    endx=event.changedTouches[0].screenX;
    // console.log(startx +"-"+endx);
    if(startx>endx+50){
        moveToNext()
    }
    if(startx<endx-50){
        moveToPrev()
    }
});

function moveToNext() {
    console.log(index+"-"+items.length)
  if (index < items.length - 1) {
    index++;
  } else {
    index = 0; 
  }
  updateCarousel();
}

function moveToPrev() {
  if (index > 0) {
    index--;
  } else {
    index = items.length - 1; 
  }
  updateCarousel();
}

function updateCarousel() {
  const width_prop =-index*300;
  container.style.transform = `translateX(${width_prop}px)`;
}


