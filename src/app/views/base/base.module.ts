// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
import { StudentListComponent } from './studentList.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { InsertMarksComponent } from './insertMarks.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { studentMarksComponent } from './studentMarks.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { AddSubjectComponent } from '../../add-subject/add-subject.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [
    StudentListComponent,
    InsertMarksComponent,
    studentMarksComponent,
    AddSubjectComponent
  ]
})
export class BaseModule { }
