import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Assurez-vous que FormsModule est importé

import { PagesUserRoutingModule } from './pages-user-routing.module';
import { MesFavorisComponent } from './mes-favoris/mes-favoris.component';

@NgModule({
  declarations: [], // Déclarez le composant ici
  imports: [
    CommonModule,
    FormsModule, // Assurez-vous que FormsModule est importé
    ReactiveFormsModule,
    PagesUserRoutingModule
  ]
})
export class PagesUserModule { }
