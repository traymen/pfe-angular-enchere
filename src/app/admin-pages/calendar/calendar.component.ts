import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { FullCalendarComponent } from '@fullcalendar/angular/full-calendar.component';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
import { EnchereResponse } from 'src/app/modelss/enchere-response';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  enchereList: EnchereResponse[] = [];

  calendarOptions: CalendarOptions;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  constructor(private lesservices: ServicesssService) {}

  ngOnInit(): void {
    this.loadEncheres();
    
    this.initializeCalendar();

  }

  loadEncheres() {
    this.lesservices.getListEnchere().subscribe(
      (data: EnchereResponse[]) => {
        this.enchereList = data;
        this.initializeCalendar();
      },
      (error) => {
        console.log('Erreur lors du chargement des enchères :', error);
      }
    );
  }

  initializeCalendar(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      events: this.mapEncheresToEvents(),
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      height: 'auto',
      contentHeight: 'auto',
      eventContent: function(arg) {
        const event = arg.event;
        const etat = event.extendedProps['etat'];
        const color = etat === 'Terminer' ? 'red' : 'green';
  
        // Utilisez des balises div avec des styles pour chaque attribut
        const customHTML = `
        <div style="text-align: center;">
          <div style="font-weight: bold; color: black; font-size: 14px;">
            ${event.extendedProps['nomProduit']}
          </div>
          <br>
          <div style="color: ${color};  font-weight: bold ;font-size: 16px;">
            ${etat === 'Terminer' ? 'Enchère terminée' : 'Enchère en cours'}
          </div>
          <br>
          <div style="font-weight: bold; font-size: 14px;" >
            Heure: ${event.extendedProps['heure']}
          </div>
        </div>
      `;

  
        return { html: customHTML };
      },
    };
  }
  
  
  

  mapEncheresToEvents() {
    return this.enchereList.map(enchere => {
      return {
        title: '', // Le titre est laissé vide, car nous utilisons eventContent pour le contenu
        start: `${enchere.date}T${enchere.heure}`,
        backgroundColor: 'transparent', // La couleur de fond est transparente car nous utilisons du HTML pour le style
        borderColor: 'transparent',
        textColor: 'black',
        extendedProps: {
          idEnchere: enchere.idEnchere,
          descriptionProduit: enchere.descriptionProduit,
          nomProduit: enchere.nomProduit,
          etat: enchere.etat,
          heure: enchere.heure
        }
      };
    });
  }
  
  

  handleDateClick(arg) {
    console.log('Date cliquée :', arg.dateStr);
  }

  handleEventClick(arg) {
    console.log('Événement cliqué :', arg.event.title);
  }
}
