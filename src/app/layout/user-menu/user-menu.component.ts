import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent  implements OnInit{
  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
      this.model = [
        /*
        {
              label: 'Home',
              items: [
                  { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
              ]
          },
          */
          {
              label: 'Gestion',
              items: [
                  { label: 'Liste des enchères', icon: 'pi pi-list', routerLink: ['/u/pagesuserr/list-enchere-user'] },
                  { label: 'Mes Participations', icon: 'pi pi-list', routerLink: ['/u/pagesuserr/history-user'] },
                  { label: 'Faire une Réclamation', icon: 'pi pi-exclamation-triangle', routerLink: ['/u/pagesuserr/reclamation'] },
                  { label: 'Enchères terminées', icon: 'pi pi-check-circle', routerLink: ['/u/pagesuserr/userenchereterminer'] },
                  { label: ' Mes Réclamations', icon: 'pi pi-fw pi-table', routerLink: ['/u/pagesuserr/historiquereclamation'] },
                  { label: 'Mes Favoris', icon: 'pi pi-fw pi-list', routerLink: ['/u/pagesuserr/favoris'] },
                  { label: 'Vip Enchére', icon: 'pi pi-star', routerLink: ['/u/pagesuserr/vip'] },
                  { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/u/pagesuserr/detailsnotif/:auctionId'] },
                  { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                  { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                  { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                  { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                  { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                  { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                  { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
              ]
          },
         
        
          {
              label: 'Pages',
              icon: 'pi pi-fw pi-briefcase',
              items: [
                  {
                      label: 'Landing',
                      icon: 'pi pi-fw pi-globe',
                      routerLink: ['/landing']
                  },
                  {
                      label: 'Auth',
                      icon: 'pi pi-fw pi-user',
                      items: [
                          {
                              label: 'Login',
                              icon: 'pi pi-fw pi-sign-in',
                              routerLink: ['/auth/login']
                          },
                          {
                              label: 'Error',
                              icon: 'pi pi-fw pi-times-circle',
                              routerLink: ['/auth/error']
                          },
                          {
                              label: 'Access Denied',
                              icon: 'pi pi-fw pi-lock',
                              routerLink: ['/auth/access']
                          }
                      ]
                  },
                  {
                      label: 'Crud',
                      icon: 'pi pi-fw pi-pencil',
                      routerLink: ['/pages/crud']
                  },
                  {
                      label: 'Timeline',
                      icon: 'pi pi-fw pi-calendar',
                      routerLink: ['/pages/timeline']
                  },
                  {
                      label: 'Not Found',
                      icon: 'pi pi-fw pi-exclamation-circle',
                      routerLink: ['/notfound']
                  },
                  {
                      label: 'Empty',
                      icon: 'pi pi-fw pi-circle-off',
                      routerLink: ['/pages/empty']
                  },
              ]
          },
          {
              label: 'Hierarchy',
              items: [
                  {
                      label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                      items: [
                          {
                              label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                              items: [
                                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                              ]
                          },
                          {
                              label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                              items: [
                                  { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                              ]
                          },
                      ]
                  },
                  {
                      label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                      items: [
                          {
                              label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                              items: [
                                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                              ]
                          },
                          {
                              label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                              items: [
                                  { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                              ]
                          },
                      ]
                  }
              ]
          },
        
      ];
  }
}
