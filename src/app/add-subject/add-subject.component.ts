import { Component, OnInit } from '@angular/core';
import { navItems } from '../_nav';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {

  subjectName =''
  constructor() { }

  addSubject(): void {
    console.log("xx")
    console.log(navItems[0])
    navItems[0].children.push({
      name: this.subjectName,
      url: '/base/insertMarks',
      icon: 'icon-star'
    })
  }
  ngOnInit() {
  }

}
