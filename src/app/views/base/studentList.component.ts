import { Component } from '@angular/core';
import { MarkRecord } from '../../mark-record';

@Component({
  templateUrl: 'studentList.component.html'
})
export class StudentListComponent {

  studentRecords = [
    new MarkRecord("Samppa Nori", "Kolokwium 1", new Date('2012/01/01'), 5, 20),
    new MarkRecord("Estavan Lykos", "Kolokwium 1", new Date('2012/02/01'), 4, 15)
  ]
  constructor() { }

}
