import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, pipe, throwError } from 'rxjs';
import { RestaurantInterface } from '../interfaces/restaurant-interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private _http:HttpClient) { }

  getRestaurants(){
    return this._http.get('http://localhost:3000/restaurant');
  }

  getRestaurant(id:number){
    return this._http.get(`http://localhost:3000/restaurant/${id}`);
  }

  postRestaurant(data: RestaurantInterface){
    return this._http.post('http://localhost:3000/restaurant', data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Fonction appelée en cas d'erreur
  private handleError(error: HttpErrorResponse) {
    //Si l'erreur est de type client-side
    if (error.status === 0) {
      // Erreur de type client-side ou une erreur réseau s'est produite.
      console.error('An error occurred:', error.error);
    } else {
      // Le backend a retourné un code de réponse sans succès.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
