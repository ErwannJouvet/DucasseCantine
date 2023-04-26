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
}
