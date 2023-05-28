import { Component } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-creer-ingredient',
  templateUrl: './creer-ingredient.component.html',
  styleUrls: ['./creer-ingredient.component.css']
})
export class CreerIngredientComponent {

  constructor(private ingredientService:IngredientService){
    
  }

  // Fonction d'envoi de l'ingrédient
  submit(data:any){
    this.ingredientService.postIngredient(data);
  }

}
