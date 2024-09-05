import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesUserRoutingModule } from './pages-user-routing.module';
import { ParticipationuserComponent } from './participationuser/participationuser.component';
import { ListeEnchereUserComponent } from './liste-enchere-user/liste-enchere-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoriqueUserComponent } from './historique-user/historique-user.component';
import { MesFavorisComponent } from './mes-favoris/mes-favoris.component';
import { UserComponent } from './user/user.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { HistoriqueReclamationComponent } from './historique-reclamation/historique-reclamation.component';
import { PaymentComponent } from './payment-component/payment-component.component';
import { NotificationUserComponent } from './notification-user/notification-user.component';
import { VipuserComponent } from './vipuser/vipuser.component';
import { EncherdetailsComponent } from './encherdetails/encherdetails.component';
import { Router, RouterModule } from '@angular/router';
import { DetailsnotifuserComponent } from './detailsnotifuser/detailsnotifuser.component';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatIconModule } from '@angular/material/icon';
//import { MatMenuModule } from '@angular/material/menu';
//import { MatDialogModule } from '@angular/material/dialog';
//import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    ParticipationuserComponent,
    ListeEnchereUserComponent,
    HistoriqueUserComponent,
    MesFavorisComponent,
    UserComponent,
    ReclamationComponent,
    HistoriqueReclamationComponent,
    PaymentComponent,
    NotificationUserComponent,
    VipuserComponent,
    EncherdetailsComponent,
    DetailsnotifuserComponent
  ],
  imports: [
    CommonModule,
    PagesUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
   

  ]
})
export class PagesUserModule { }
