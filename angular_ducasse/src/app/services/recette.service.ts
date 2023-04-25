import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecetteInterface } from '../interfaces/recette-interface';
@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private _http:HttpClient) { }

  getRecettes():RecetteInterface[]{
    return [
      {id:1, nom:"Coquillettes au beurre", description:"Les coquilletes miam", photo:"coquillettes.jpg", temps_preparation:10, temps_cuisson: 10, pvc:23.99, date_ajout:"25/04/2023", id_utilisateur:1},
    ]
  }

  postRecette(data:any){
    return this._http.post('http://localhost:3000/recette',data);
  }
}
