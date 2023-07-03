import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreerRecetteComponent } from './creer-recette/creer-recette.component';
import { CreerRestaurantComponent } from './creer-restaurant/creer-restaurant.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecetteDetailComponent } from './recette-detail/recette-detail.component';
import { RecettesComponent } from './recettes/recettes.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';


// Déclaration des routes
const routes: Routes = [ 
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', redirectTo:'recettes', pathMatch:'full'},
  {path:'recettes', component:RecettesComponent},
  {path:'recette/:id', component:RecetteDetailComponent},
  {path:'restaurants', component:RestaurantsComponent},
  {path:'restaurant/:id', component:RestaurantComponent},
  {path: 'creer-recette', component:CreerRecetteComponent},
  {path: 'creer-restaurant', component:CreerRestaurantComponent},
  {path:'login', component:LoginComponent},
];

// Déclaration du module de routage
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
