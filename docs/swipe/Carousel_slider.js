class Carousel_Slider{
    constructor(container,slider_items,itemwidth){
         this.container=document.querySelector(container);
         this.items=document.querySelectorAll(slider_items);
         this.item_width=itemwidth;
        this.startx=0;
        this.endx=0;
        this.index=0;
        this.inial_event()
    }
        inial_event(){
        this.container.addEventListener('touchstart',(event)=>{
           this.startx=event.changedTouches[0].screenX;
        })

        this.container.addEventListener('touchend',(event)=>{
            this.endx=event.changedTouches[0].screenX;
            if(this.startx>this.endx+50){
                this.moveToNext()
            }
            if(this.startx<this.endx-50){
                this.moveToPrev()
            }
        });
        }

        moveToNext() {
        if (this.index < this.items.length - 1) {
            this.index++;
        } else {
            this.index = 0; 
        }
        this.updateCarousel();
        }

         moveToPrev() {
        if (this.index > 0) {
            this.index--;
        } else {
            this.index = items.length - 1; 
        }
        this.updateCarousel();
        }

        updateCarousel() {
        const width_prop =-this.index*this.item_width;
        this.container.style.transform = `translateX(${width_prop}px)`;
        }
}

const Community_slider= new Carousel_Slider('.section5-slider','.section5-cards',300);

const News_slider= new Carousel_Slider('.section3-news-slider','.section3-news-cards',300);

const Events_slider=new Carousel_Slider('.events-slider','.events-cards',300);