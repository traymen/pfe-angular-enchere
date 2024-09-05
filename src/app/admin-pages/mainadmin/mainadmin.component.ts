import { Component, AfterViewInit, HostListener } from '@angular/core';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
//import { CalendarEvent, CalendarView, MOMENT } from 'angular-calendar';
//import { Subject } from 'rxjs';
//import * as moment from 'moment';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-mainadmin',
  templateUrl: './mainadmin.component.html',
  styleUrls: ['./mainadmin.component.css']
})
export class MainadminComponent {
  constructor(private keycloakService: KeycloakService )
  { 
 }

  logout() {
    this.keycloakService.logout();
  }

account() {
  this.keycloakService.accountManagement();
}

calendarPlugins = [dayGridPlugin, interactionPlugin];
  calendarEvents = [
    { title: 'Event 1', date: '2024-07-20' },
    { title: 'Event 2', date: '2024-07-21' }
  ];

  calendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.calendarEvents
  };

  handleDateClick(arg: DateClickArg) {
    alert('Date clicked: ' + arg.dateStr);
  }

}
