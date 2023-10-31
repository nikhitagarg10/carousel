import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() images: carouselImage[]=[]
  indicators = true;  
  controls = true;
  @Input() autoSlide: boolean;
  @Input() slideInterval: number;
  interval
  selectedIndex = 0;

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    // this.setAutoSlideState(changes.autoSlide.currentValue);
    /* METHOD 1 */
    // if(this.autoSlide && changes.slideInterval){
    //   console.log("autoSlide", this.autoSlide, " slideInterval(new-value)", changes.slideInterval.currentValue)
    //   this.setAutoSlideTimer(changes.slideInterval.currentValue)
    //   this.setAutoSlideState(this.autoSlide);
    // }
    // else if(changes.autoSlide){
    //   console.log("change in autoSlide(new-value)", changes.autoSlide.currentValue)
    //   this.setAutoSlideState(changes.autoSlide.currentValue);
    // }
    /* METHOD 2 */
    if(changes.slideInterval){
      console.log("slider clicked")
      this.setSliderConfig(this.autoSlide, changes.slideInterval.currentValue)
    }
    else if(changes.autoSlide){
      console.log("autoSlide clicked")
      this.setSliderConfig(changes.autoSlide.currentValue, this.slideInterval)
    }
  }
  setAutoSlideState(status: boolean): void{
    if(status){
      this.interval = setInterval(() => {
        this.onNextClick();
      }, this.slideInterval);
    }
    else{
      clearInterval(this.interval)
    }
  }
  setAutoSlideTimer(timer: number): void{
    if(this.autoSlide)
      this.interval = setInterval(() => {
        this.onNextClick()
      }, timer)
    else 
      clearInterval(this.interval)
  }
  setSliderConfig(status: boolean, timer: number): void{
    console.log("status", status, "timer", timer)
    if(status){
      // console.log("status is true")
      clearInterval(this.interval);
      this.interval = setInterval(()=>{
        this.onNextClick();
        console.error(this.interval);
      },timer)
    }
    else{
      console.log("interval cleared")
      clearInterval(this.interval);
      console.warn(this.interval);
    }
  }
  /**
   * 
   * @param index 
   */
  selectImage (index:number):void{
    this.selectedIndex = index;
  }
  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length -1;
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick():void{
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}
