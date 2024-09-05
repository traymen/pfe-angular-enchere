import { Component } from '@angular/core';
import { SupprimerFavoris$Params } from 'src/app/services/fn/favoris/supprimer-favoris';
import { FavorisService } from 'src/app/services/services';

@Component({
  selector: 'app-mes-favoris',
  templateUrl: './mes-favoris.component.html',
  styleUrls: ['./mes-favoris.component.css']
})
export class MesFavorisComponent {
  constructor(private serviceFavoris: FavorisService)
  {  }
 idEnchh!: any;

 ngOnInit(): void {
  
   this.getFavorisUser()

 }
 public favoris: any = [];

 getFavorisUser() {
    this.serviceFavoris.getListFavoriss().subscribe(res => {
      this.favoris.push(...res);

      // Tri des coordonnées par moyenne décroissante
    //  this.allcoordonne.sort((a: Coordonne, b: Coordonne) => b.moyenne - a.moyenne);

      console.log(this.favoris);

    });
  }

  idFavoris!:number ;
onDeleteFavoris(idFavoris: number | undefined): void {
  if (idFavoris === undefined) {
    console.warn('L\'ID de l\'enchère n\'est pas défini.');
    return;
  }

  const params: SupprimerFavoris$Params = { idFavoris: idFavoris };
  this.serviceFavoris.supprimerFavoris(params).subscribe(
    () => {
      console.log(`supprimée avec succès.`);
      // Mettez à jour ou traitez d'autres choses après la suppression réussie
    },
    error => {
      console.error('Erreur lors de la suppression de favoris :', error);
      // Gérez l'erreur ici
    }
  );
}
}
