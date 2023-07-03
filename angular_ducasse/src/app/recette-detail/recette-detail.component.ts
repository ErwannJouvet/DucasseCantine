import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtapeInterface } from '../interfaces/etape-interface';
import { RecetteInterface } from '../interfaces/recette-interface';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.css']
})
export class RecetteDetailComponent {
  recetteDetail:any;
  recetteId:any;

  constructor(private activeRoute: ActivatedRoute, private recetteService: RecetteService){
    
  }

  //Charge la recette au chargement de la page
  ngOnInit(){
    this.recetteId = this.activeRoute.snapshot.paramMap.get('id');
    let recetteDetailData = this.recetteService.getRecette(this.recetteId);
  
    // Souscription a l'observable pour récupérer les données
    recetteDetailData.subscribe(res => {
      this.recetteDetail = res;
      this.sortEtapes();
      console.log(this.recetteDetail); // pour afficher l'objet dans la console
    });
  }

    // Tri des étapes par ordre croissant
    sortEtapes() {
      if (this.recetteDetail && this.recetteDetail.etapes) {
        this.recetteDetail.etapes.sort((a: EtapeInterface, b: EtapeInterface) => a.numero_ordre - b.numero_ordre);
      }
    }  

    //suppression d'une recette
    deleteRecette(id: number) {
      this.recetteService.deleteRecette(id).subscribe(res => {
        console.log(res);
      });
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
  

  

}
