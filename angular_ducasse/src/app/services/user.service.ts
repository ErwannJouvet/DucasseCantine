import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, pipe, throwError } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get('http://localhost:3000/users');
  }

  getUser(id:number){
    return this._http.get(`http://localhost:3000/users/${id}`);
  }

  postUser(data: UserInterface){
    return this._http.post('http://localhost:3000/users', data)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if (error.status === 0){
      console.error('An error occurred:', error.error);
    }else{
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
