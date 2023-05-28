import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EtapeInterface } from '../interfaces/etape-interface';
import { IngredientInterface } from '../interfaces/ingredient-interface';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-creer-recette',
  templateUrl: './creer-recette.component.html',
  styleUrls: ['./creer-recette.component.css']
})
export class CreerRecetteComponent {

  recetteForm: FormGroup; // Formulaire pour recette

  constructor(
    private recetteService: RecetteService,
    private formBuilder: FormBuilder
  ) 
  { 
    // Création du formulaire
    this.recetteForm = this.formBuilder.group({
      nom: '',
      description: '',
      photo: '',
      temps_preparation: '',
      temps_cuisson: '',
      ingredients: this.formBuilder.array([]),
      etapes: this.formBuilder.array([])
    });
  };

  // Formulaire pour ingredient
  ingredients(): FormArray {
    return this.recetteForm.get("ingredients") as FormArray;
  }
  
  // Création d'un nouvel ingrédient
  newIngredient(): FormGroup {
    return this.formBuilder.group({
      nom: '',
      allergene: false,
      dosage: '',
      photo: ''
    });
  }
  //
  addIngredient() {
    this.ingredients().push(this.newIngredient());
  }

  // Suppression d'un ingrédient
  removeIngredient(i: number) {
    this.ingredients().removeAt(i);
  }

  // Formulaire pour étape
  etapes(): FormArray {
    return this.recetteForm.get("etapes") as FormArray;
  }

  // Création d'une nouvelle étape
  newEtape(): FormGroup {
    return this.formBuilder.group({
      instructions: ""
    });
  }

  // Ajout d'une étape
  addEtape() {
    this.etapes().push(this.newEtape());
  }

  // Suppression d'une étape
  removeEtape(i: number) {
    this.etapes().removeAt(i);
  }

  // Soumission du formulaire WIP
  submit() {
    const form = this.recetteForm.getRawValue();
    const dateRecette = new Date();
    
    // Création de l'objet recette
    const recette = {
      nom: form.nom,
      description: form.description,
      photo: form.photo,
      temps_preparation: Number(form.temps_preparation),
      temps_cuisson: Number(form.temps_cuisson),
      date: dateRecette.toISOString().split('T')[0], // Format date AAAA-MM-JJ
      // Formatage des ingrédients
      ingredients: form.ingredients.map((ingredient: IngredientInterface) => ({
        nom: ingredient.nom,
        photo: ingredient.photo,
        dosage: ingredient.dosage,
        allergene: ingredient.allergene
      })),
      // Formatage des étapes
      etapes: form.etapes.map((etape: EtapeInterface, i: number) => ({
        numero_ordre: i + 1,
        instructions: etape.instructions
      }))
    }
     // Envoi de la recette
    this.recetteService.postRecette(recette)
      .subscribe(recette => console.log(recette));
  }

}
