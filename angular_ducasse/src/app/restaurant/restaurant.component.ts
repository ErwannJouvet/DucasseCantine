import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantInterface } from '../interfaces/restaurant-interface';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  restaurant:any;
  restaurantId:any;

  constructor(private activeRoute: ActivatedRoute, private restaurantService: RestaurantsService) { 

  }

  ngOnInit(){
    this.restaurantId = this.activeRoute.snapshot.paramMap.get('id');
    let restaurantData = this.restaurantService.getRestaurant(this.restaurantId);

    restaurantData.subscribe(res => {
      this.restaurant = res;
      console.log(this.restaurant);
    });
  }
  
}
