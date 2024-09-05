export class EnchereResponse {
    idEnchere?: number;
  nomProduit?: string;
  descriptionProduit?: string;
  nombreCondidat?: number;
  date?: string; 
  heure?: string; 
  image?: string; 
  prix?: string;
  prixGagnant?:string;
  nombreCondidatsInscrits?: number;
  nombreCondidatsRestants?: number;
  prixE?: number;

  type?: 'VETEMENTSPORT' | 'ELECTRONIQUE' | 'VETEMENT' | 'VOITURE' | 'ELECTROMENAGER' | 'MONTREetBIJOUX';
  etat?: 'Terminer' | 'Encours';
  
  codeAcces?: string;

}
