/* tslint:disable */
/* eslint-disable */
import { LocalTime } from '../models/local-time';
export interface EnchereResponse {
  codeAcces?: string;
  date?: string;
  descriptionProduit?: string;
  etat?: 'Terminer' | 'Encours';
  heure?: LocalTime;
  idEnchere?: number;
  image?: Array<string>;
  nomProduit?: string;
  nombreCondidat?: number;
  nombreCondidatsInscrits?: number;
  nombreCondidatsRestants?: number;
  prix?: number;
  prixE?: number;
  prixGagnant?: number;
  type?: 'VETEMENTSPORT' | 'ELECTRONIQUE' | 'VETEMENT' | 'VOITURE' | 'ELECTROMENAGER' | 'MONTREetBIJOUX';
}
