import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipationuserComponent } from './participationuser/participationuser.component';
import { ListeEnchereUserComponent } from './liste-enchere-user/liste-enchere-user.component';
import { HistoriqueUserComponent } from './historique-user/historique-user.component';
import { MesFavorisComponent } from './mes-favoris/mes-favoris.component';
import { UserComponent } from './user/user.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { HistoriqueReclamationComponent } from './historique-reclamation/historique-reclamation.component';
import { PaymentComponent } from './payment-component/payment-component.component';
import { VipuserComponent } from './vipuser/vipuser.component';
import { EncherdetailsComponent } from './encherdetails/encherdetails.component';
import { DetailsnotifuserComponent } from './detailsnotifuser/detailsnotifuser.component';

const routes: Routes = [{
  path: 'user-participate/:idEnchere',
  component: ParticipationuserComponent
},
{
  path: 'list-enchere-user',
  component: ListeEnchereUserComponent
},
{
  path: 'history-user',
  component: HistoriqueUserComponent
},
{
  path: 'favoris',
  component: MesFavorisComponent
},
{
  path: 'reclamation',
  component: ReclamationComponent
},
{
  path: 'historiquereclamation',
  component: HistoriqueReclamationComponent
},
{
  path: 'payment/:idEnchere',
  component: PaymentComponent
},
{
  path: 'userenchereterminer',
  component: UserComponent
},
{
  path: 'vip',
  component: VipuserComponent
},
{
  path: 'detailsnotif/:auctionId',
  component: DetailsnotifuserComponent
},
{
  path: 'details/:id',
  component: EncherdetailsComponent
}

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesUserRoutingModule { }
