import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idioma: string;
  tema: string; 
  constructor(private router:Router, private authSrv:AuthService) {
    this.idioma = 'espanol';
    this.tema='numeros';
  }
 


  CambiarTema(num:string){
    this.tema= num;
  }

  CambiarIdioma(idioma:string){
    this.idioma= idioma;
  }

  cerrarSesion(){
    this.authSrv.LogOut().then(()=>
      this.router.navigate(['login'])
    );
  }

}
