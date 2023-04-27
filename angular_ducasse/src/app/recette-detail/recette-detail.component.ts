import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.css']
})
export class RecetteDetailComponent {
  recetteDetail:any=[];
  recetteId:any;

  constructor(private activeRoute: ActivatedRoute, private recetteService: RecetteService){
    
  }

  ngOnInit(){
    this.recetteId = this.activeRoute.snapshot.paramMap.get('id');
    // this.recetteDetail = this.recetteService.getRecettes().filter(recette => recette.id == this.recetteId);
    console.log(this.recetteId);
  }

}
