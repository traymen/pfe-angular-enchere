import { Component, OnInit } from '@angular/core';
import { ParticipantCountDto } from 'src/app/services/models';
import { ParticipantService } from 'src/app/services/services/participant.service';

@Component({
  selector: 'app-topuser',
  templateUrl: './topuser.component.html',
  styleUrl: './topuser.component.css'
})
export class TopuserComponent implements OnInit {

  participantCounts: ParticipantCountDto[] = [];

  constructor(private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.participantService.getParticipantCounts().subscribe(
      (data) => {
        this.participantCounts = data.sort((a, b) => b.participationCount - a.participationCount);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }
  
}
