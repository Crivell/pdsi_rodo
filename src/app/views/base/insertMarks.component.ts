import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  templateUrl: 'insertMarks.component.html',   providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }
  ],
  // animations: [
  //   trigger('formSentSuccess', [
  //     state('no', style({
  //       visibility: 'visible'
  //     })),
  //     state('yes', style({
  //       visibility: 'hidden'
  //     })),
  //     transition('no => yes', [
  //       animate('0.5s')
  //     ])
  //   ])
  // ]
})
export class InsertMarksComponent {

  markName = ''
  markDate = new Date()
  submitted = false
  formSentSuccess = 'no'
  clearForm(): void {
    this.markName = ''
    this.markDate = null
  }

  onSubmit(): void {
    this.submitted = true
  }
 

  // constructor() {
  //   for (let i = 0; i < 4; i++) {
  //     this.addSlide();
  //   }
  // }
}
