import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}


  idioma(idioma:string){ 
    switch (idioma) {
      case 'espanol':
        this.router.navigate(['espanol']);
        break;
        case 'portugues':
          this.router.navigate(['portugues']);
          break;
          case 'ingles':
            this.router.navigate(['ingles']);
            break;
    
      default:
        this.router.navigate(['home']);
        break;
    }
  }

}
