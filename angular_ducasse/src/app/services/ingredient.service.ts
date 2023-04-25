import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IngredientInterface } from '../interfaces/ingredient-interface';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private _http:HttpClient) { }

  getIngredients():IngredientInterface[]{
    return[
      {id:1, nom:"cacahuète", photo:"cacahuete.jpg", allergene:true},
    ]
  }

  postIntgredient(data:any){
    return this._http.post('',data);
  }

}
