import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  seConnecter(userInterface: UserInterface){
    localStorage.setItem('user', JSON.stringify(userInterface));
  }
  
  estConnecte(): boolean{
    return localStorage.getItem('user') != null;
  }

  seDeconnecter(){
    localStorage.removeItem('user');
  }
  
}
