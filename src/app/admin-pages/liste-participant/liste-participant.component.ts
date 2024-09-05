import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/services/models';
import { ParticipantService } from 'src/app/services/services';

@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.css']
})
export class ListeParticipantComponent {
  constructor(private serviceParticipant: ParticipantService, private route: ActivatedRoute, private router: Router)
   { this.idEnchh = this.route.snapshot.params['idEnchere'] }
  idEnchh!: any;

  ngOnInit(): void {
   
    this.getParticipant()

  }
  public allparticipant: any = [];
  
  getParticipant() {
    this.serviceParticipant.afficherParticipants({idEnch : this.idEnchh}).subscribe(res => {
      this.allparticipant = res.sort((a: any, b: any) => b.prix - a.prix);
      console.log(this.allparticipant);
    });
  }
  
  

  
}
