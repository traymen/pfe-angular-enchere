import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetListReclamationType$Params } from 'src/app/services/fn/reclamation/get-list-reclamation-type';
import { ReponseReclamtion$Params } from 'src/app/services/fn/reclamation/reponse-reclamtion';
import { Reclamation, ReclamationResponse } from 'src/app/services/models';
import { ReclamationService } from 'src/app/services/services';
import { animate, style, transition, trigger } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
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
export class ReclamationComponent {
  showResponse = true; // ou false selon vos besoins

  constructor(private reclamation : ReclamationService , private router: Router ,    private toastr: ToastrService
    )
  { 
 }
 ngOnInit(): void {
   this.loadReclamation();

 }
 
 selectedType!: GetListReclamationType$Params['type'];
 reclamations : ReclamationResponse[] = [];

  message: string = '';

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

  
 
  loadReclamation(): void {
    if (this.selectedType) {
      this.reclamation.getListReclamationType({ type: this.selectedType }).subscribe(
        (data: ReclamationResponse[]) => {
          this.reclamations = data;
          if (this.reclamations.length === 0) {
            this.message = "Pas de réclamation disponible dans cette catégorie pour le moment.";
          } else {
            this.message = '';
          }
        },
        (error) => {
          console.log('Erreur lors du chargement des réclamations :', error);
        }
      );
    } else {
      this.reclamation.getListReclamationn().subscribe(
        (data: ReclamationResponse[]) => {
          this.reclamations = data;
          if (this.reclamations.length === 0) {
            this.message = "Pas de réclamation disponible pour le moment.";
          } else {
            this.message = '';
          }
        },
        (error) => {
          console.log('Erreur lors du chargement des réclamations :', error);
        }
      );
    }
  }

  reclamationn: Reclamation = {
    reponse: '',
    idReclamation:0
   
  };
  getreclamatindata(idReclamation:any){
    
    this.reclamationn.idReclamation=idReclamation
  }

  onSubmitt() {
    if (this.reclamationn.idReclamation !== undefined) {
      const params: ReponseReclamtion$Params= {
        idReclamation: this.reclamationn.idReclamation,
        body: this.reclamationn
      };
  
      this.reclamation.reponseReclamtion(params).subscribe({
        next: () => {
          console.log('Enchère modifiée avec succès');
          this.toastr.success(
            'Votre réponse a été enregistrée avec succès.',
            'Success', // Titre optionnel
            {
              positionClass: 'toast-top-right',
              timeOut: 3000 // Durée d'affichage en millisecondes (ajustez selon vos besoins)
            }
          ).onHidden.subscribe(() => {
            this.closeModal();
            window.location.reload();

          //  this.router.navigate(['/admin/reclamationAdmin']);

          },
          )
        },
        error: (err) => {
          console.error('Erreur lors de la modification de l\'enchère', err);
          // Ajoutez ici votre logique d'erreur (affichage de message d'erreur, etc.)
        }
      });
    }
  }
  
  closeModal(): void {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      modal.setAttribute('style', 'display: none');
      const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (modalBackdrop) {
        document.body.removeChild(modalBackdrop);
      }
    }
  }
}
