import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecetteDetailComponent } from './recette-detail/recette-detail.component';
import { RecettesComponent } from './recettes/recettes.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', redirectTo:'recettes', pathMatch:'full'},
  {path:'recettes', component:RecettesComponent},
  {path:'recettes', component:RecettesComponent},
  {path:'recette/:id', component:RecetteDetailComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
