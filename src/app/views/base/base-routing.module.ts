import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Przedmiot 1 - lista ocen, dostępna tylko dla prowadzącego'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Przedmiot 2 - oceny do wstawienia przez prowadzącego'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Przedmiot 3 - widok dla studenta'
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
