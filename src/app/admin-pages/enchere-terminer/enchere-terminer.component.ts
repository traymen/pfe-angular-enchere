import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { EnchereResponse } from 'src/app/modelss/enchere-response';

import { Encheree } from 'src/app/modelss/encheree';
import { AjooutEcnhereTerminer$Params } from 'src/app/services/fn/enchere/ajoout-ecnhere-terminer';
import { DeleteEnchere$Params } from 'src/app/services/fn/enchere/delete-enchere';
import { GetListEnchereType$Params } from 'src/app/services/fn/enchere/get-list-enchere-type';
import { Modifpost$Params } from 'src/app/services/fn/enchere/modifpost';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { Enchere, LocalTime } from 'src/app/services/models';
import { EnchereService } from 'src/app/services/services';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';

@Component({
  selector: 'app-enchere-terminer',
  templateUrl: './enchere-terminer.component.html',
  styleUrls: ['./enchere-terminer.component.css']
})
export class EnchereTerminerComponent {
  enchereForm: FormGroup;

  constructor(private serviceEnchere : EnchereService , private lesservices: ServicesssService, private router: Router,private keycloakService: KeycloakService , private encherService : EnchereService , private fb: FormBuilder)
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
 selectedType: GetListEnchereType$Params['type'] | '' = '';
 message: string = '';



loadEncheres() {
  if (this.selectedType) {
    this.lesservices.getListEnchereByTypeTerminer(this.selectedType).subscribe(
      (data: EnchereResponse[]) => {
        this.enchereList = data;
        if (data.length === 0) {
          this.message = "Pas d'enchère disponible dans cette catégorie pour le moment.";
        } else {
          this.message = '';
        }
      },
      (error) => {
        console.log('Erreur lors du chargement des enchères :', error);
      }
    );
  } else {
    this.lesservices.getListEnchereTerminer().subscribe(
      (data: EnchereResponse[]) => {
        this.enchereList = data;
        if (data.length === 0) {
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

 logout() {
  this.keycloakService.logout;
}
}
