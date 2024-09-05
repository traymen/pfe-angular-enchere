import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnchereResponse } from 'src/app/modelss/enchere-response';
import { Encheree } from 'src/app/modelss/encheree';
import { GetListEnchereType$Params } from 'src/app/services/fn/enchere/get-list-enchere-type';
import { AddFavorite$Params } from 'src/app/services/fn/favoris/add-favorite';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { Enchere, Favoris } from 'src/app/services/models';
import { FavorisService } from 'src/app/services/services';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
@Component({
  selector: 'app-liste-enchere-user',
  templateUrl: './liste-enchere-user.component.html',
  styleUrls: ['./liste-enchere-user.component.css']
})
export class ListeEnchereUserComponent {
  constructor( private serviceFavoris : FavorisService, private lesservices: ServicesssService, private router: Router,private keycloakService: KeycloakService)
  { this.enchereList = [];
 }
 ngOnInit(): void {
  this.lesservices.getUserNotifications().subscribe(notifications => {
    this.lesservices.showNotifications(notifications);
  });
   this.loadEncheres();

 }
 
 enchereList: EnchereResponse[];
 selectedType: GetListEnchereType$Params['type'] | '' = '';
 message: string = '';


idFavoris!:number ;
onDeleteFavoris(idFavoris: number | undefined): void {
  if (idFavoris === undefined) {
    console.warn('L\'ID de l\'enchère n\'est pas défini.');
    return;
  }
}
loadEncheres() {
  // Fonction pour filtrer les enchères en cours
  const filterEnCours = (data: EnchereResponse[]) => {
    return data.filter(enchere => enchere.etat === 'Encours');
  };

  // Fonction pour filtrer les enchères par type
  const filterByType = (data: EnchereResponse[], type: string) => {
    return data.filter(enchere => enchere.type === type);
  };

  if (this.selectedType) {
    // Charger les enchères par type et appliquer les filtres
    this.lesservices.getListEnchereByType(this.selectedType).subscribe(
      (data: EnchereResponse[]) => {
        console.log('Enchères récupérées par type :', data); // Debugging

        // Filtrer par état 'Encours' et par type
        this.enchereList = filterEnCours(data);
        
        console.log('Enchères filtrées (état Encours) :', this.enchereList); // Debugging

        // Vérifier s'il y a des enchères disponibles
        if (this.enchereList.length === 0) {
          this.message = "Pas d'enchère disponible pour ce type .";
        } else {
          this.message = '';
        }
      },
      (error) => {
        console.log('Erreur lors du chargement des enchères :', error);
      }
    );
  } else {
    // Charger toutes les enchères et appliquer le filtre pour les enchères en cours
    this.lesservices.getListEnchereadmin().subscribe(
      (data: EnchereResponse[]) => {
        console.log('Enchères récupérées sans type :', data); // Debugging

        // Filtrer par état 'Encours'
        this.enchereList = filterEnCours(data);
        
        console.log('Enchères filtrées (état Encours) :', this.enchereList); // Debugging

        // Vérifier s'il y a des enchères disponibles
        if (this.enchereList.length === 0) {
          this.message = "Pas d'enchère disponible pour le moment.";
        } else {
          this.message = '';
        }
      },
      (error) => {
        console.log('Erreur lors du chargement des enchères :', error);
      }
    );
  }
}


navigateByIdEnchere(enchere: any) {
  console.log("Enchere:", enchere);
  const url = '/u/pagesuserr/payment/' + enchere.idEnchere;
  console.log("Redirection URL:", url);
  this.router.navigateByUrl(url);
}
 logout() {
  this.keycloakService.logout();
}

favoris : Enchere ={
  idEnchere:0
};

  
   showSuccess: boolean = false;

   addToFavorites(idEnchere: any) {
    this.favoris.idEnchere = idEnchere;
    console.log(this.favoris);
  
    if (this.favoris.idEnchere !== undefined) {
      const params: AddFavorite$Params = {
        idEnchere: this.favoris.idEnchere
      };
  
      this.serviceFavoris.addFavorite(params).subscribe({
        next: () => {
          this.showSuccess = true; // Affiche la fenêtre de succès
                setTimeout(() => {
                  this.showSuccess = false;
                }, 3000);

          console.log('Enchère ajoutée aux favoris avec succès');
          // Ajoutez ici les actions supplémentaires si nécessaire
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de l\'enchère aux favoris:', err);
        }
      });
    } else {
      console.warn('L\'ID de l\'enchère n\'est pas défini.');
    }
  }
  
  

}
