import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {

  restaurants:any;

  constructor(private restaurantsService:RestaurantsService, private router: Router){}

  // Charge les restaurants au chargement de la page
  ngOnInit(){
    let restaurantsData = this.restaurantsService.getRestaurants();
    
    // Souscription a l'observable pour récupérer les données
    restaurantsData.subscribe(res => {
      this.restaurants = res;
    });
  }

  detailRestaurant(id:number){
    this.router.navigate([`/restaurant/${id}`])
  }

}
