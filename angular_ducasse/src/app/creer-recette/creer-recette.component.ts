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

  recetteForm: FormGroup;

  constructor(
    private recetteService: RecetteService,
    private formBuilder: FormBuilder
  ) 
  { 
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
  
  newIngredient(): FormGroup {
    return this.formBuilder.group({
      nom: '',
      allergene: false,
      dosage: '',
      photo: ''
    });
  }

  addIngredient() {
    this.ingredients().push(this.newIngredient());
  }

  removeIngredient(i: number) {
    this.ingredients().removeAt(i);
  }

  // Formulaire pour étapes
  etapes(): FormArray {
    return this.recetteForm.get("etapes") as FormArray;
  }

  newEtape(): FormGroup {
    return this.formBuilder.group({
      instructions: ""
    });
  }

  addEtape() {
    this.etapes().push(this.newEtape());
  }

  removeEtape(i: number) {
    this.etapes().removeAt(i);
  }

  // Envoi du formulaire, WIP
  submit() {
    const form = this.recetteForm.getRawValue();
    // format JourText MoisText Jour Année etc... -> YYYY-MM-DDTXXXXX (donc le split)
    const dateRecette = new Date();

    const recette = {
      nom: form.nom,
      description: form.description,
      photo: form.photo,
      temps_preparation: Number(form.temps_preparation),
      temps_cuisson: Number(form.temps_cuisson),
      date: dateRecette.toISOString().split('T')[0],
      ingredients: form.ingredients.map((ingredient: IngredientInterface) => ({
        nom: ingredient.nom,
        photo: ingredient.photo,
        dosage: ingredient.dosage,
        allergene: ingredient.allergene
      })),
      etapes: form.etapes.map((etape: EtapeInterface, i: number) => ({
        numero_ordre: i + 1,
        instructions: etape.instructions
      }))
    }

    this.recetteService.postRecette(recette)
      .subscribe(recette => console.log(recette));
  }

}
