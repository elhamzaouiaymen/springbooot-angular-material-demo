export interface IProcedure{
  id: number;
  nom: string;
  courant: number;
  description: string;
  duree_acquisition: string;
  filtre_additionel: string;
  foyer: string;
  frequence_acquisition: string;
  nb_sequence_indices: string;
  tension: number;
  date: string;
  disatance_foyer_recepteur: number;
  taille_de_champ: number;
  version: string;
  id_region: number;
}
