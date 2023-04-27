import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit(){
    this.recetteId = this.activeRoute.snapshot.paramMap.get('id');
    let recetteDetailData = this.recetteService.getRecette(this.recetteId);
  
    recetteDetailData.subscribe(res => {
      this.recetteDetail = res;
      console.log(this.recetteDetail); // pour afficher l'objet dans la console
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

}
