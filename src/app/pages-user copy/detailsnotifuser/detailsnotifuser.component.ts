import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enchere, EnchereResponse } from 'src/app/services/models';
import { EnchereService } from 'src/app/services/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailsnotifuser',
  templateUrl: './detailsnotifuser.component.html',
  styleUrl: './detailsnotifuser.component.css'
})
export class DetailsnotifuserComponent implements OnInit {

  
  enchereId: number | null = null;
  enchere: EnchereResponse[] = []; // Utiliser un tableau d'enchères
  errorMessage: string | null = null;
  constructor(private route: ActivatedRoute ,     private enchereService: EnchereService ,    private router: Router // Injecter Router

    ) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const idEnch = Number(params.get('auctionId')); // Récupérez l'ID de l'enchère depuis les paramètres d'URL
        if (idEnch) {
          this.enchereService.getEnchById({idEnch}).subscribe({
            next: (response) => {
              console.log(response)
              this.enchere = response; // Stockez les détails de l'enchère

             // this.enchere = response; // Assurez-vous que vous accédez correctement aux données de la réponse
             // this.errorMessage = null;
            },
            error: (err) => {
              this.enchere = null;
              this.errorMessage = 'Erreur lors du chargement de l\'enchère.';
              console.error('Erreur lors du chargement de l\'enchère', err);
            }
          });
        } else {
          this.errorMessage = 'ID d\'enchère invalide.';
        }
      });
    }

    // Méthode pour gérer la navigation
  navigateByIdEnchere(enchere: EnchereResponse): void {
    if (enchere && enchere.idEnchere) {
      this.router.navigate(['/u/pagesuserr/user-participate/', enchere.idEnchere]);
    }
  }
}
