import { Component } from '@angular/core';
import { RecetteInterface } from '../interfaces/recette-interface';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {

  recettes:RecetteInterface[]=[];

  constructor(private recetteService:RecetteService){

  }

  ngOnInit(){
    this.recettes = this.recetteService.getRecettes();
  }

  isAllergene(recette: RecetteInterface): boolean{
    let isAllergene = false;
    for(let i = 0; i < recette.ingredients.length; i++){
      if (recette.ingredients[i].allergene){
        isAllergene = true;
        break;
      }
    }
    return isAllergene;
  }

  isDescriptionTooLong(recette: RecetteInterface): boolean{
    let isDescriptionTooLong = false;
    if (recette.description.length > 100){
      isDescriptionTooLong = true;
    }
    return isDescriptionTooLong;
  }
}
