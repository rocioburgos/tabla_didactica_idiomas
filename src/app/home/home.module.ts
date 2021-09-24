import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { EspanolComponent } from '../espanol/espanol.component';
import { InglesComponent } from '../ingles/ingles.component';
import { PortuguesComponent } from '../portugues/portugues.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    EspanolComponent,
    InglesComponent,
    PortuguesComponent]
})
export class HomePageModule { }
