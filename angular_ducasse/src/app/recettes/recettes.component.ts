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
  ){}

  // Charge les recettes au chargement de la page
  ngOnInit(){
    let recetteData = this.recetteService.getRecettes();
    
    // Souscription a l'observable pour récupérer les données
    recetteData.subscribe(res => {
      this.recettes = res;
    });
  }

  // Redirige vers la page de détail de la recette avec l'id de la recette
  detailRecette(id: number) {
    this.router.navigate([`/recette/${id}`]);
  }

  // Vérifie si la recette contient un allergène
  isAllergene(recette: RecetteInterface): boolean{
    let isAllergene = false;
    // Parcours les ingrédients de la recette
    for(let i = 0; i < recette.ingredients.length; i++){
      if (recette.ingredients[i].allergene){
        isAllergene = true;
        break;
      }
    }
    return isAllergene;
  }

  // Vérifie si la description est trop longue
  isDescriptionTooLong(recette: RecetteInterface): boolean{
    let isDescriptionTooLong = false;
    // Si la description est plus longue que 100 caractères
    if (recette.description.length > 100){
      isDescriptionTooLong = true;
    }
    return isDescriptionTooLong;
  }

  
}
