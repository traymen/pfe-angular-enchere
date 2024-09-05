import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetEnchereByCodeAcces$Params } from 'src/app/services/fn/enchere/get-enchere-by-code-acces';
import { Enchere } from 'src/app/services/models';
import { EnchereService } from 'src/app/services/services';

@Component({
  selector: 'app-vipuser',
  templateUrl: './vipuser.component.html',
  styleUrl: './vipuser.component.css'
})
export class VipuserComponent {

  codeAcces: string = '';
  enchere: Enchere | null = null;
  errorMessage: string | null = null;

  constructor(private enchereService: EnchereService  , private router: Router,    private toastr: ToastrService
    ) {}

  onSubmit(): void {
    const params: GetEnchereByCodeAcces$Params = { codeAcces: this.codeAcces };
  
    this.enchereService.getEnchereByCodeAcces(params).subscribe({
      next: (response) => {
        const enchere = response; // Récupérez les détails de l'enchère
        console.log(enchere);
  
        if (enchere) {
          const enchereId = enchere.idEnchere; // Extraire l'ID de l'enchère
          console.log('ID de l\'enchère:', enchereId);
          this.toastr.success(
            'Welcome to VIP Enchère!',
            'Success', // Titre optionnel
            {
              positionClass: 'toast-top-right',
              timeOut: 3000 // Durée d'affichage en millisecondes (ajustez selon vos besoins)
            }
          ).onHidden.subscribe(() => {
            this.router.navigate(['/u/pagesuserr/details', enchereId]);
          });
          // Naviguer vers la page des détails avec l'ID dans l'URL
        //  this.router.navigate(['/u/pagesuserr/details', enchereId]);
        } else {
          // this.errorMessage = 'Aucune enchère trouvée pour ce code.';
         
        }
      },
      error: (err) => {
       // this.errorMessage = 'Code d\'accès incorrect ou enchère non trouvée.';
       // console.error('Erreur lors du chargement de l\'enchère', err);
       this.toastr.error(
        'Code d\'accès incorrect!',
        'error', // Titre optionnel
        {
          positionClass: 'toast-top-right',
          timeOut: 2000 // Durée d'affichage en millisecondes (ajustez selon vos besoins)
        }
      )
      }
    });
  }
  

}
