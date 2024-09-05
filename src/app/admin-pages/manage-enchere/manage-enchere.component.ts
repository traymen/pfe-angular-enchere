import { HttpContext, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Encheree } from 'src/app/modelss/encheree';
import { Enchere } from 'src/app/services/models';
import { EnchereService } from 'src/app/services/services';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { jwtDecode } from 'jwt-decode';
import Keycloak from 'keycloak-js';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-manage-enchere',
  templateUrl: './manage-enchere.component.html',
  styleUrls: ['./manage-enchere.component.scss']
})
export class ManageEnchereComponent {

  myForm: FormGroup;
  constructor(
    private bookService: EnchereService,
    private router: Router,
    private lesservices: ServicesssService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private keycloakService: KeycloakService,
    private toastr: ToastrService
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
      encherePrivee: [false]       



    });
    this.myForm.get('encherePrivee')?.valueChanges.subscribe(value => {
      console.log('Enchère Privée:', value);
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
  private generateCodeAcces(): string {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Générer un code à 4 chiffres
  }
 


  saveenchere() {
    this.enchereRequest.encherePrivee = this.myForm.get('encherePrivee')?.value;

    const accessToken = localStorage.getItem('accessToken');
  
    if (!accessToken) {
      console.error('Access token not found in local storage');
      return;
    }
  
    const decodedToken: any = jwtDecode(accessToken);
    const userId = decodedToken.sub; // Obtenez l'ID de l'utilisateur à partir du token décodé
  
    this.enchereRequest.createdBy = userId; // Ajoutez l'ID de l'utilisateur à la demande d'enchère
    console.log('Enchère Privée:', this.enchereRequest.encherePrivee);

    this.lesservices.saveenchere(this.enchereRequest, accessToken)
      .subscribe({
        next: (idEnchere) => {
          this.lesservices.uploadEnchereCoverPicture(idEnchere, this.selectedBookCover, accessToken)
            .subscribe({
              next: () => {
               /* 
                this.showSuccess = true; // Affiche la fenêtre de succès
                setTimeout(() => {
                  this.showSuccess = false;
                  this.router.navigate(['/admin/list-enchere-admin']);
                }, 2000);
*/
/*
this.toastr.success(
  'Enchère sauvegardée  avec succès!',
  'Success', // Titre optionnel
  {
    positionClass: 'toast-top-right'
  }
);
this.router.navigate(['/admin/list-enchere-admin']);
*/
this.toastr.success(
  'Enchère sauvegardée avec succès!',
  'Success', // Titre optionnel
  {
    positionClass: 'toast-top-right',
    timeOut: 3000 // Durée d'affichage en millisecondes (ajustez selon vos besoins)
  }
).onHidden.subscribe(() => {
  this.router.navigate(['/admin/list-enchere-admin']);
});


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
