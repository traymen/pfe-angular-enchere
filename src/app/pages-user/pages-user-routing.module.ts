import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesFavorisComponent } from './mes-favoris/mes-favoris.component';
import { AppLayoutComponent } from '../layout/app.layout.component';

const routes: Routes = [
 
      {
        path: 'favoris',
        component: MesFavorisComponent
      },
    ]
  
;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesUserRoutingModule { }
