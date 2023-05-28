import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerRecetteComponent } from './creer-recette/creer-recette.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecetteDetailComponent } from './recette-detail/recette-detail.component';
import { RecettesComponent } from './recettes/recettes.component';

// Déclaration des routes
const routes: Routes = [ 
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', redirectTo:'recettes', pathMatch:'full'},
  {path:'recettes', component:RecettesComponent},
  {path:'recette/:id', component:RecetteDetailComponent},
  {path: 'creer-recette', component:CreerRecetteComponent},
  {path:'login', component:LoginComponent},
];

// Déclaration du module de routage
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
