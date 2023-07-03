import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-creer-restaurant',
  templateUrl: './creer-restaurant.component.html',
  styleUrls: ['./creer-restaurant.component.css']
})
export class CreerRestaurantComponent {

  restaurantForm: FormGroup;

  constructor(private restaurantsService: RestaurantsService, private router: Router, private formBuilder: FormBuilder) {
    this.restaurantForm = this.formBuilder.group({
      nom: ['', Validators.required],
      num_voie: ['', Validators.required],
      adresse: ['', Validators.required],
      code_postale: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }

  submit() {
    if (this.restaurantForm.invalid) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    const restaurant = this.restaurantForm.value;

    this.restaurantsService.postRestaurant(restaurant)
      .subscribe(() => {
        console.log(restaurant);
        this.router.navigate(['/restaurants']);
        alert('Restaurant ajouté.')
      });
  }
}
