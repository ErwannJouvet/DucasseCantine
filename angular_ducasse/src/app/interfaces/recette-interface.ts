export interface RecetteInterface {
    id: number;
    nom: string;
    description: string;
    photo: string;
    temps_preparation: number;
    temps_cuisson: number;
    date: string;
    ingredients: {
      nom: string;
      photo: string;
      allergene: boolean;
      dosage: string;
    }[];
    etapes: {
      numero_ordre: number;
      instructions: string;
    }[];
  }
  