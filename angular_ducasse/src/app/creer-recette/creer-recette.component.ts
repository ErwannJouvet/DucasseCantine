import { Component } from '@angular/core';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-creer-recette',
  templateUrl: './creer-recette.component.html',
  styleUrls: ['./creer-recette.component.css']
})
export class CreerRecetteComponent {

  constructor(private recetteService:RecetteService){
    
  }
  
  submit(data:any){
    this.recetteService.postRecette(data);
    console.log(data);
  }

}
