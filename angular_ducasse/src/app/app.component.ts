import { Component } from '@angular/core';
import { UserInterface } from './interfaces/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_ducasse';


  //Vérifie si l'utilisateur est connecté
  isLogged(): boolean{
    let isLogged = false;
    if (localStorage.getItem('user') != null){
      isLogged = true;
    }
    return isLogged;
  }
}
