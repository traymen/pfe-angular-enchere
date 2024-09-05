import { HttpContext, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Encheree } from 'src/app/modelss/encheree';
import { Enchere } from 'src/app/services/models';
import { EnchereService } from 'src/app/services/services';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { jwtDecode } from 'jwt-decode';
import Keycloak from 'keycloak-js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importez les modules nécessaires ici
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-favoris',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './mes-favoris.component.html',
  styleUrl: './mes-favoris.component.css',

})
export class MesFavorisComponent {
  myForm: FormGroup;
  constructor(
    private bookService: EnchereService,
    private router: Router,
    private lesservices: ServicesssService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private keycloakService: KeycloakService
  ) {
    this.myForm = this.formBuilder.group({
      prixE: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],

      date: ['', [Validators.required]],
      descriptionProduit: ['', [Validators.required]],
      heure: ['', [Validators.required]],
     image: ['', [Validators.required]],
      nomProduit: ['', [Validators.required]],
      nombreCondidat: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      prix: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      type: ['', [Validators.required]],




    });
  }
  private _keycloak: Keycloak | undefined;


  errorMsg: Array<string> = [];
  enchereRequest: Encheree = new Encheree()
  selectedBookCover: any;
  selectedPicture: string | undefined;
  uploadErrorMsg: any;

  onFileSelected(event: any) {
    this.selectedBookCover = event.target.files[0];
    console.log(this.selectedBookCover);

    if (this.selectedBookCover) {

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedBookCover);
      // Mettez à jour la valeur de l'image dans le formulaire
      this.myForm.patchValue({
        image: this.selectedBookCover
      });
    }
  }


  showSuccess: boolean = false;

  saveenchere() {
    const accessToken = localStorage.getItem('accessToken');
  
    if (!accessToken) {
      console.error('Access token not found in local storage');
      return;
    }
  
    const decodedToken: any = jwtDecode(accessToken);
    const userId = decodedToken.sub; // Obtenez l'ID de l'utilisateur à partir du token décodé
  
    this.enchereRequest.createdBy = userId; // Ajoutez l'ID de l'utilisateur à la demande d'enchère
  
    this.lesservices.saveenchere(this.enchereRequest, accessToken)
      .subscribe({
        next: (idEnchere) => {
          this.lesservices.uploadEnchereCoverPicture(idEnchere, this.selectedBookCover, accessToken)
            .subscribe({
              next: () => {
                this.showSuccess = true; // Affiche la fenêtre de succès
                setTimeout(() => {
                  this.showSuccess = false;
                  this.router.navigate(['/dashboard/list-enchere-admin']);
                }, 2000);

              },
              error: (err) => {
                console.log('Error uploading cover picture:', err);
                this.uploadErrorMsg = 'Veuillez Ajouter une image:'; // Stockez le message d'erreur
                setTimeout(() => {
                  this.uploadErrorMsg = ''; // Réinitialisez le message d'erreur après 5 secondes
                }, 5000);
              }
            });
        },
        error: (err) => {
          console.log('Error saving enchere:', err);
          this.errorMsg = err.error.validationErrors;
        }
      });
  }
  



  logout() {
    this.keycloakService.logout();
  }

  account() {
     this.keycloakService.accountManagement();
  }

}
