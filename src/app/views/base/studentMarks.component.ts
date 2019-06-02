import { Component } from '@angular/core';
import { MarkRecord } from '../../mark-record';

@Component({
  templateUrl: 'studentMarks.component.html'
})
export class studentMarksComponent {

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
