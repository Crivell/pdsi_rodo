import { Component } from '@angular/core';

@Component({
  templateUrl: 'studentMarks.component.html'
})
export class studentMarksComponent {

  constructor() { }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
