// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



// Components Routing
import { BaseRoutingModule } from './base-routing.module';

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
    CardsComponent,
    CarouselsComponent,
    CollapsesComponent
  ]
})
export class BaseModule { }
