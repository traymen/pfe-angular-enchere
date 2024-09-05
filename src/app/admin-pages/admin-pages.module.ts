import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { ListeEnchereAdminComponent } from './liste-enchere-admin/liste-enchere-admin.component';
import { ManageEnchereComponent } from './manage-enchere/manage-enchere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeParticipantComponent } from './liste-participant/liste-participant.component';
import { EnchereTerminerComponent } from './enchere-terminer/enchere-terminer.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { MainadminComponent } from './mainadmin/mainadmin.component';
//import dayGridPlugin from '@fullcalendar/daygrid';
//import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'; 
import { VipencherelisteComponent } from './vipenchereliste/vipenchereliste.component';
//import { CalendarComponent } from './calendar/calendar.component';
//import { FullCalendarModule } from '@fullcalendar/angular';
//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; // L'import du module Angular FullCalendar

// Importation des plugins FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import { CalendarComponent } from './calendar/calendar.component';
import { TopuserComponent } from './topuser/topuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
/*
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin
]);
*/
@NgModule({
  declarations: [
    ListeEnchereAdminComponent,
    ManageEnchereComponent,
    ListeParticipantComponent,
    EnchereTerminerComponent,
    ReclamationComponent,
    MainadminComponent,
    VipencherelisteComponent,
    CalendarComponent,
    TopuserComponent
  ],
  imports: [
    CommonModule,
    AdminPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule
  // ToastrModule.forRoot(),
  //  BrowserAnimationsModule
   // ToastrModule
    


  ]
})
export class AdminPagesModule { }
