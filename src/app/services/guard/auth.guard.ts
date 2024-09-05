
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from '../keycloak/keycloak.service';
import { inject } from '@angular/core';

/*
export const authGuard: CanActivateFn = () => {
  const keycloakService :KeycloakService = inject(KeycloakService);
  const router = inject(Router);
  if (keycloakService.keycloak?.isTokenExpired()) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
*/
export const authGuard: CanActivateFn = (route, state) => {
  const keycloakService: KeycloakService = inject(KeycloakService);
  const router = inject(Router);

  if (keycloakService.keycloak?.isTokenExpired()) {
    router.navigate(['login']);
    return false;
  }

  const roles = keycloakService.keycloak?.realmAccess?.['roles'] || [];

  if (route.data['roles'] && !route.data['roles'].some((role: string) => roles.includes(role))) {
    router.navigate(['forbidden']);
    return false;
  }

  return true;
};