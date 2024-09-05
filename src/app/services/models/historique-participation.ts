/* tslint:disable */
/* eslint-disable */
import { LocalTime } from '../models/local-time';
export interface HistoriqueParticipation {
  date?: string;
  descriptionProduit?: string;
  heure?: LocalTime;
  image?: Array<string>;
  nomProduit?: string;
  nombreCondidat?: number;
  prix?: number;
  prixBoutique?: number;
  codeAcces?: string;

}
