import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";  
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
      AppComponent, 
      LoginComponent ,
      NavbarComponent
    ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
   
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy 
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
