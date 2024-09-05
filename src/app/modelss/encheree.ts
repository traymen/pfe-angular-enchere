import { LocalTime } from '../modelss/local-time';
//import { Participant } from 'app/services/models/participant';
export class Encheree {
  createdBy?: string;
  createdDate?: string;
  date?: string;
  descriptionProduit?: string;
  heure?: LocalTime;
  idEnchere?: number;
  image?: string;
  nomProduit?: string;
  nombreCondidat?: number;
  prixE?: number;

//  participantList?: Array<Participant>;
  prix?: string;
  type?: 'VETEMENTSPORT' | 'ELECTRONIQUE' | 'VETEMENT' | 'VOITURE' | 'ELECTROMENAGER' | 'MONTREetBIJOUX';
  encherePrivee?: Boolean;
  codeAcces?: string;
}

