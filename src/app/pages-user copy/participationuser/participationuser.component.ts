import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Encheree } from 'src/app/modelss/encheree';
//import { Participant } from 'src/app/modelss/participant';
import { Enchere } from 'src/app/services/models';
import {  ParticipantService } from 'src/app/services/services/participant.service';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';
import { jwtDecode } from 'jwt-decode';
import {Participant} from 'src/app/services/models/participant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-participationuser',
  templateUrl: './participationuser.component.html',
  styleUrls: ['./participationuser.component.css']
})
export class ParticipationuserComponent {
  errorMsg: Array<string> = [];
  myForm: FormGroup;
  showSuccess: boolean = false;


  constructor(
    private router: Router,
    private lesservices: ServicesssService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private participantService:ParticipantService,
    private toastr: ToastrService
  ) {
    this.myForm = this.formBuilder.group({
      prix: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]+)?$')]]

    });
  }

idEnch!: any;
ngOnInit(): void {
  this.idEnch = this.route.snapshot.params['idEnchere'] 

}

participant: Participant = {};
onSubmit = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.error('Token not found in local storage');
    return;
  }

  const decodedToken: any = jwtDecode(token);

  const firstname = decodedToken.given_name;
  const lastname = decodedToken.family_name;
  const gmail = decodedToken.email;
  this.participant.firstname = firstname; 
  this.participant.lastname = lastname; 
  this.participant.gmail = gmail; 
  this.participantService.saveParticipation({
    idEnchere: this.idEnch,
    body: this.participant
  })
  .subscribe({
    next: () => {
      console.log('Saved successfully');
/*
      this.showSuccess = true; // Affiche la fenêtre de succès
      setTimeout(() => {
        this.showSuccess = false;
        this.router.navigate(['/u/pagesuserr/history-user']);
      }, 2000);
*/
this.toastr.success(
  'Vous avez participé avec succès!',
  'Success', // Titre optionnel
  {
    positionClass: 'toast-top-right',
    timeOut: 3000 // Durée d'affichage en millisecondes (ajustez selon vos besoins)
  }
).onHidden.subscribe(() => {
  this.router.navigate(['/u/pagesuserr/history-user']);});
    },
    error: (error) => {
      console.error('Error saving', error);
    }
  });
}


}
