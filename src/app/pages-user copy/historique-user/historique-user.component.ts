import { Component } from '@angular/core';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { ParticipantService } from 'src/app/services/services';

@Component({
  selector: 'app-historique-user',
  templateUrl: './historique-user.component.html',
  styleUrls: ['./historique-user.component.css']
})
export class HistoriqueUserComponent {

  constructor(private serviceParticipant: ParticipantService , private keycloakService: KeycloakService)
  {  }
 idEnchh!: any;

 ngOnInit(): void {
  
   this.getHistoriqueUser()

 }
 public history: any = [];

  getHistoriqueUser() {
    this.serviceParticipant.getUserParticipationHistory().subscribe(res => {
      this.history.push(...res);

     

      console.log(this.history);
    });
  }
  
  logout() {
    this.keycloakService.logout();
  }
}
