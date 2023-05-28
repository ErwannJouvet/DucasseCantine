import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IngredientInterface } from '../interfaces/ingredient-interface';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private _http:HttpClient) { }

  // Fonction retournant la liste des ingredients
  getIngredients():IngredientInterface[]{
    return[
      {id:1, nom:"cacahuète", photo:"cacahuete.jpg", allergene:true},
    ]
  }

  // Fonction de post d'un ingredient
  postIngredient(data:any){
    return this._http.post('',data);
  }

}
