import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteInterface } from '../interfaces/recette-interface';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {

  recettes:any;

  constructor(
    private recetteService:RecetteService,
    private router: Router
  ){

  }

  ngOnInit(){
    let recetteData = this.recetteService.getRecettes();
    
    recetteData.subscribe(res => {
      this.recettes = res;
    });
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

  detailRecette(id: number) {
    this.router.navigate([`/recette/${id}`]);
  }
}
