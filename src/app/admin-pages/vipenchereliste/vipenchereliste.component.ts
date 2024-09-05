
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { EnchereResponse } from 'src/app/modelss/enchere-response';

import { Encheree } from 'src/app/modelss/encheree';
import { AjooutEcnhereTerminer$Params } from 'src/app/services/fn/enchere/ajoout-ecnhere-terminer';
import { DeleteEnchere$Params } from 'src/app/services/fn/enchere/delete-enchere';
import { Modifpost$Params } from 'src/app/services/fn/enchere/modifpost';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { Enchere, LocalTime } from 'src/app/services/models';
import { EnchereService } from 'src/app/services/services';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
@Component({
  selector: 'app-vipenchereliste',
  templateUrl: './vipenchereliste.component.html',
  styleUrl: './vipenchereliste.component.css'
})
export class VipencherelisteComponent {
  enchereForm: FormGroup;

  constructor(private lesservices: ServicesssService, private router: Router,private keycloakService: KeycloakService , private encherService : EnchereService , private fb: FormBuilder)
  { this.enchereList = [];


    this.enchereForm = this.fb.group({
      idEnch: ['', Validators.required],
      body: ['', Validators.required]
    });
 }
 ngOnInit(): void {
   this.loadEncheres();

 }
 
 enchereList: EnchereResponse [];
 pieData: any;

 encoursCount: number ;
 termineCount: number ;
 loadEncheres() {
  this.lesservices.getListEnchere().subscribe(
    (data: EnchereResponse[]) => {
     
      // Filtrer et trier par date ici
      this.enchereList = data
        .filter(enchere => enchere.etat === 'Encours'&& enchere.codeAcces !== null) // Filtrer les enchères dont le statut est 'Encours'
        .sort((a, b) => {
          const dateA = a.date ? new Date(a.date).getTime() : 0;
          const dateB = b.date ? new Date(b.date).getTime() : 0;
          return dateA - dateB; // Trier par ordre croissant (par date)
          // return dateB - dateA; // Pour trier par ordre décroissant
        });
    },
    (error) => {
      console.log('Erreur lors du chargement des enchères :', error);
    }
  );
}


 navigateByIdEnchere(enchere: any) {
   console.log("Enchere:", enchere);
   const url = '/admin/list-participant/' + enchere.idEnchere;
   console.log("Redirection URL:", url);
   this.router.navigateByUrl(url);
 }

 logout() {
  this.keycloakService.logout();
}

accountManagement() {
  this.keycloakService.accountManagement();
}


encheree: Enchere = {
  prixGagnant: 0,
  idEnchere:0
 
};
getdata2(idEnchere:any){
  
  this.encheree.idEnchere=idEnchere
}
showSuccess = false; // Assurez-vous que cela est déclaré dans votre composant

onSubmitt() {
  if (this.encheree.idEnchere !== undefined) {
    const params: AjooutEcnhereTerminer$Params = {
      idEnch: this.encheree.idEnchere,
      body: this.encheree
    };

    this.encherService.ajooutEcnhereTerminer(params).subscribe({
      next: () => {
        console.log('Enchère modifiée avec succès');
        this.closeModal();
        setTimeout(() => {
          this.showSuccess = true;
          setTimeout(() => {
            this.showSuccess = false;
            this.router.navigate(['admin/list-encheres-terminer']).then(() => {
              location.reload();
            });
          }, 1000); 
        }, 1000);

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
    
 
 

  enchereRequest: Enchere = {
    // Initialisez votre enchère ici
    idEnchere: 0,
    nomProduit: '',
    prixE: 0,

    descriptionProduit: '',
    nombreCondidat: 0,
    date: '',
    prix: 0,
    image:''
  };


  getdata(nomProduit:any,descriptionProduit:any,prix:any,date:any,heure:any,nombreCondidat:any,idEnchere:any,image:any){
this.enchereRequest.nomProduit=nomProduit
this.enchereRequest.descriptionProduit=descriptionProduit
this.enchereRequest.prix=prix
this.enchereRequest.date=date
this.enchereRequest.heure=heure
this.enchereRequest.nombreCondidat=nombreCondidat
this.enchereRequest.idEnchere=idEnchere
this.enchereRequest.image=image
this.selectedPicture = image; 


console.log(this.enchereRequest)
 }



  onSubmit() {
   
    if (this.enchereRequest.idEnchere !== undefined) {
      const params: Modifpost$Params = {
        idEnch: this.enchereRequest.idEnchere,
        body: this.enchereRequest
      };
  
      this.encherService.modifpost(params).subscribe({
        next: (response) => {
          console.log('Enchère modifiée avec succès');
          
          // Vérifiez si un fichier a été sélectionné pour téléchargement
          if (this.selectedBookCover) {
            this.lesservices.uploadEnchereCoverPicture2(params.idEnch, this.selectedBookCover).subscribe({
              next: () => {
                console.log('Image de couverture téléchargée avec succès');
                /*
                this.showSuccess = true; // Affiche la fenêtre de succès
                setTimeout(() => {
                  this.showSuccess = false;
                  this.router.navigate(['/list-enchere-admin']);
                }, 2000); */
                // Ajoutez ici votre logique de succès (redirection, message de confirmation, etc.)
              },
              error: (err) => {
                console.error('Erreur lors du téléchargement de l\'image de couverture', err);
                // Ajoutez ici votre logique d'erreur (affichage de message d'erreur, etc.)
              }
            });
          } else {
            console.log('Aucune image de couverture sélectionnée');
            // Ajoutez ici votre logique de succès si aucune image n'est sélectionnée
          }
        },
        error: (err) => {
          console.error('Erreur lors de la modification de l\'enchère', err);
          // Ajoutez ici votre logique d'erreur (affichage de message d'erreur, etc.)
        }
      });
    }
  }
  /*
  getImageSource(): string {
    if (this.enchereRequest.image) {
      return 'data:image/jpeg;base64,' + this.enchereRequest.image;
    } else {
      return this.selectedPicture ? this.selectedPicture : 'https://via.placeholder.com/150?text=Not+Found';
    }
  }
  */

  selectedBookCover: any;
  selectedPicture: string | undefined;
  onFileSelected(event: any) {
    this.selectedBookCover = event.target.files[0];
    console.log(this.selectedBookCover);

    if (this.selectedBookCover) {

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedBookCover);
    }
  }

/*
  EnchereId!:number;
  onDelete = () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette enchere?')) {
      this.encherService.deleteEnchere({EnchereId: this.EnchereId}).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
      });
    }
  }
*/
enchereId!:number ;
onDeleteEnchere(enchereId: number | undefined): void {
  if (enchereId === undefined) {
    console.warn('L\'ID de l\'enchère n\'est pas défini.');
    return;
  }

  const params: DeleteEnchere$Params = { EnchereId: enchereId };
  this.encherService.deleteEnchere(params).subscribe(
    () => {
      console.log(`Enchère ${enchereId} supprimée avec succès.`);
      // Mettez à jour ou traitez d'autres choses après la suppression réussie
    },
    error => {
      console.error('Erreur lors de la suppression de l\'enchère :', error);
      // Gérez l'erreur ici
    }
  );
}


  id!:number ;
  onDelete = (idEnchere: any) => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      console.error('Access token not found in local storage');
      return;
    }

    const decodedToken: any = jwtDecode(accessToken);
    const userId = decodedToken.sub; // Obtenez l'ID de l'utilisateur à partir du token décodé

    this.enchereRequest.createdBy = userId; // Ajoutez l'ID de l'utilisateur à la demande d'enchère

    if (confirm('Êtes-vous sûr de vouloir supprimer cette mobilite?')) {
      this.lesservices.deleteEnchere(idEnchere,accessToken).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
      });
    }
  }

  toggleLike(enchere: any) {
    enchere.liked = !enchere.liked;
    // Ici, vous pouvez ajouter la logique pour sauvegarder l'état de "like" côté serveur si nécessaire
  }
}
