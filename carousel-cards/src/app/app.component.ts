import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousal';
  isAutoSlide: boolean = true
  timerInterval: number = 3000
  intervalForm: FormGroup = null;
  images = [
    {
      imageSrc:
        '../assets/images/img-1.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
      '../assets/images/img-2.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
      '../assets/images/img-3.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
      '../assets/images/img-4.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:
      '../assets/images/img-5.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:
      '../assets/images/img-6.jpg',
      imageAlt: 'person2',
    },
  ]

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.intervalForm = this.fb.group({
      time: this.fb.control(3000) // '' is default value
    })
  }
  toggleAutoSlide(){
    this.isAutoSlide = !this.isAutoSlide
  }
  setSliderInterval(){
    this.timerInterval=this.intervalForm.value.time
    console.log("time-interval in app.component", this.timerInterval)
  }
}