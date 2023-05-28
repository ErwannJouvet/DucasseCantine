import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { RecetteInterface } from '../interfaces/recette-interface';
@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private _http:HttpClient) { }

  // Fonction retournant la liste des recettes
  getRecettes(){
   return this._http.get('http://localhost:3000/recette');
  }

  //Fonction retournant une recette en fonction de son ID
  getRecette(id: number){
    return this._http.get(`http://localhost:3000/recette/${id}`);
  }

  //Fonction de post d'une recette
  postRecette(data: RecetteInterface) {
    return this._http.post('http://localhost:3000/recette', data)
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
    //
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  
}
