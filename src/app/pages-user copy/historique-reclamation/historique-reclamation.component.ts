import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ReclamationService } from 'src/app/services/services';

@Component({
  selector: 'app-historique-reclamation',
  templateUrl: './historique-reclamation.component.html',
  styleUrls: ['./historique-reclamation.component.css'],
  animations: [
    trigger('moveLeftRight', [
      transition('* => *', [
        style({ transform: 'translateX(0)' }),
        animate('2s ease-in-out', style({ transform: 'translateX(20px)' })),
        animate('2s ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HistoriqueReclamationComponent {
  showResponse = true; // ou false selon vos besoins

  constructor(private servicereclamtion:ReclamationService )
  {  }
 idEnchh!: any;

 ngOnInit(): void {
  
   this.getHistoriqueReclamation()

 }
 public history: any = [];

  getHistoriqueReclamation() {
    this.servicereclamtion.getUserReclamtionHistory().subscribe(res => {
      this.history.push(...res);

      // Tri des coordonnées par moyenne décroissante
    //  this.allcoordonne.sort((a: Coordonne, b: Coordonne) => b.moyenne - a.moyenne);

      console.log(this.history);
    });
  }

  getEtatDescription(etat: string): string {
    switch (etat) {
      case 'EN_COURS':
        return 'En cours de traitement';
      case 'TRAITE':
        return 'Traité';
      default:
        return '';
    }
  }

  getTypeDescription(type: string): string {
    switch (type) {
      case 'ProblemeEnchere':
        return 'Problème d\'enchère';
      case 'ProblemePaiement':
        return 'Problème de paiement';
      case 'Problemecompteutilisateur':
        return 'Problème de compte utilisateur';
      case 'Problemetechnique':
        return 'Problème technique';
      default:
        return 'Type de problème inconnu';
    }
  }
  
  getEtatClass(etat: string): string {
    switch (etat) {
      case 'EN_COURS':
        return 'etat-en-cours';  // classe pour "En cours de traitement"
      case 'TRAITE':
        return 'etat-traite';  // classe pour "Traité"
      default:
        return '';
    }
  }
  
}
