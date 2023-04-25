import { Injectable } from '@angular/core';
import { RecetteInterface } from '../interfaces/recette-interface';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor() { }

  getRecettes():RecetteInterface[]{
    return [
      {id:1, nom:"Coquillettes au beurre", description:"Les coquilletes miam", photo:"coquillettes.jpg", temps_preparation:10, temps_cuisson: 10, date_ajout:"25/04/2023"},
    ]
  }
}
