import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { KeycloakService } from '../services/keycloak/keycloak.service';

@Component({
    selector: 'app-topbaruser',
    templateUrl: './app.topbaruser.component.html'
})
export class AppTopBarUserComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private keycloakService: KeycloakService ) { }

    logout() {
        this.keycloakService.logout();
      }
    
    account() {
      this.keycloakService.accountManagement();
    }
}
