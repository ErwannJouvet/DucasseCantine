import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreerIngredientComponent } from './creer-ingredient/creer-ingredient.component';
import { CreerRecetteComponent } from './creer-recette/creer-recette.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecetteDetailComponent } from './recette-detail/recette-detail.component';
import { RecettesComponent } from './recettes/recettes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecettesComponent,
    RecetteDetailComponent,
    LoginComponent,
    CreerRecetteComponent,
    CreerIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
