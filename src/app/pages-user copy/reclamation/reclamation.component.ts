import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Reclamation } from 'src/app/services/models';
import { ReclamationService } from 'src/app/services/services';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  constructor(
    
     private servicereclamtion:ReclamationService,
     private toastr: ToastrService ,
     private router: Router,


   ) {
   }
   reclamtion: Reclamation = {
    contenu :'' ,
   
    firstname: '',
    gmail: '',
    lastname : '',
    //type: 'ProblemeEnchere'
    type: undefined
  };
  type = [
    { value: 'ProblemeEnchere', label: 'Problème d\'Enchère' },
    { value: 'ProblemePaiement', label: 'Problème de Paiement' },
    { value: 'Problemecompteutilisateur', label: 'Problème de Compte Utilisateur' },
    { value: 'Problemetechnique', label: 'Problème Technique' }
  ];
/*
  onSubmit = () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('Access token not found in local storage');
      return;
    }
  
    const decodedToken: any = jwtDecode(token);
  
    const firstname = decodedToken.given_name;
    const lastname = decodedToken.family_name;
    const gmail = decodedToken.email;
    this.reclamtion.firstname = firstname; 
    this.reclamtion.lastname = lastname;
    this.reclamtion.gmail = gmail;
 
    this.servicereclamtion.createReclamation({
      body: this.reclamtion
    })
    .subscribe(
      response => {
  
        console.log(' saved successfully', response);
      },
      error => {
        console.error('Error saving ', error);
      }
    );
  }
  */
  onSubmit(form: NgForm) {
    // Validation du champ "contenu"
    if (!this.reclamtion.contenu) {
      this.toastr.error('Le contenu est requis.', 'Erreur de soumission', {
        positionClass: 'toast-top-right',
        timeOut: 3000
      });
      return;
    }
// Validation du champ "type"
if (!this.reclamtion.type) {
  this.toastr.error('Le type de réclamation est requis.', 'Erreur de soumission', {
    positionClass: 'toast-top-right',
    timeOut: 3000
  });
  return;
}
    // Récupération du token et décodage
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Access token not found in local storage');
      return;
    }

    const decodedToken: any = jwtDecode(token);
    const firstname = decodedToken.given_name;
    const lastname = decodedToken.family_name;
    const gmail = decodedToken.email;
    this.reclamtion.firstname = firstname;
    this.reclamtion.lastname = lastname;
    this.reclamtion.gmail = gmail;

    // Création de la réclamation
    this.servicereclamtion.createReclamation({
      body: this.reclamtion
    }).subscribe(
      response => {
        console.log('Saved successfully', response);
        
        // Afficher le toast de succès
        this.toastr.success(
          'Réclamation sauvegardée avec succès!',
          'Succès', // Titre optionnel
          {
            positionClass: 'toast-top-right',
            timeOut: 3000 // Durée d'affichage en millisecondes
          }
        ).onHidden.subscribe(() => {
          this.router.navigate(['/u/pagesuserr/historiquereclamation']);
        });
      },
      error => {
        console.error('Error saving', error);

        // Afficher un toast d'erreur
        this.toastr.error(
          'Erreur lors de la sauvegarde de la réclamation.',
          'Erreur', // Titre optionnel
          {
            positionClass: 'toast-top-right',
            timeOut: 3000 // Durée d'affichage en millisecondes
          }
        );
      }
    );
  }
  
}
