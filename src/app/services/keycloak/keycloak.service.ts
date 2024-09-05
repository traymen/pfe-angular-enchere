import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

import { UserProfile } from './user-profile';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  
  constructor( private router: Router) {}

  private _keycloak: Keycloak | undefined;


  get keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost:8080',
    // url: 'http://http://192.168.2.132/:8085',
        realm: 'enchere',
        clientId: 'bsn',
             });
    }
    return this._keycloak;
  }
  

  private _profile: UserProfile | undefined;

  get profile(): UserProfile | undefined {
    return this._profile;
  }

async init() {
  console.log("initialisationKeycloak")
  const authenticated = await this.keycloak.init({
    onLoad: 'login-required',
  });

  if (authenticated) {
    console.log("connexionUser")

    this._profile = (await this.keycloak.loadUserProfile()) as UserProfile;
    this._profile.token = this.keycloak.token || '';
    localStorage.setItem('token', this._profile.token);
    console.log('token', "'" + this._profile.token + "'");
    // Check the user's roles and redirect accordingly
    
    const roles = this.keycloak.realmAccess?.roles || [];

      if (roles.includes('ADMIN')) {
        this.router.navigateByUrl('');
      } else if (roles.includes('USER')) {
        this.router.navigate(['u/pagesuserr/list-enchere-user']);
      }

  }
}
  
  login() {
    return this.keycloak.login();
  }

  get clientId(): string | undefined {
    return this._keycloak?.subject;
  }
  
  logout() {
   // return this.keycloak.accountManagement();
return this.keycloak?.logout();
  }
  
  accountManagement() {
   return this.keycloak?.accountManagement;
  }
  
  getLoggedInUserId(): string | null {
    if (this.keycloak.authenticated) {
      const idToken = this.keycloak.idTokenParsed;
      if (idToken && idToken.sub) { // Vérifiez également si idToken.sub est défini
        return idToken.sub;
      }
    }
    return null;
  }

  
  getToken(): Promise<string> {
    return this.keycloak.updateToken(10)
      .then(() => this.keycloak.token as string)
      .catch(() => {
        console.log('Failed to refresh token');
        return ''; // Retourne une chaîne vide en cas d'échec
      });
  }


  getUserIdFromToken(): string | null {
    if (this.keycloak.authenticated && this.keycloak.subject) {
      return this.keycloak.subject; // Obtenez l'ID de l'utilisateur à partir du token
    } 
    return null; // Retourne null si l'utilisateur n'est pas authentifié ou si aucune ID n'est disponible
  }  

}
