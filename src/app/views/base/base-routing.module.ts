import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentListComponent } from './studentList.component';
import { InsertMarksComponent } from './insertMarks.component';
import { studentMarksComponent } from './studentMarks.component';
import { AddSubjectComponent } from '../../add-subject/add-subject.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'studentList'
      },
      {
        path: 'studentList',
        component: StudentListComponent,
        data: {
          title: 'Przedmiot 1 - lista ocen, dostępna tylko dla prowadzącego'
        }
      },
      {
        path: 'insertMarks',
        component: InsertMarksComponent,
        data: {
          title: 'Przedmiot 2 - oceny do wstawienia przez prowadzącego'
        }
      },
      {
        path: 'studentMarks',
        component: studentMarksComponent,
        data: {
          title: 'Przedmiot 3 - widok dla studenta'
        }
      },
      {
        path: 'newSubject',
        component: AddSubjectComponent,
        data: {
          title: 'Adding new subject'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
