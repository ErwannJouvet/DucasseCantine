import { Component } from '@angular/core';
import { UserInterface } from './interfaces/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_ducasse';

  isLoggedIn(user:UserInterface):boolean{
    let isLoggedIn=false;
    if (user.logToken!=null){
      isLoggedIn = true;
    }
    return isLoggedIn;
  }
}
