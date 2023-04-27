import { EtapeInterface } from "./etape-interface";
import { IngredientInterface } from "./ingredient-interface";

export interface RecetteInterface {
    id?: number;
    nom: string;
    description: string;
    photo: string;
    temps_preparation: number;
    temps_cuisson: number;
    date: string;
    ingredients: IngredientInterface[];
    etapes: EtapeInterface[];
  }
  