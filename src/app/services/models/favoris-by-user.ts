/* tslint:disable */
/* eslint-disable */
import { LocalTime } from '../models/local-time';
export interface FavorisByUser {
  date?: string;
  descriptionProduit?: string;
  heure?: LocalTime;
  idFavoris?: number;
  image?: Array<string>;
  nomProduit?: string;
  nombreCondidat?: number;
  prix?: number;
}
