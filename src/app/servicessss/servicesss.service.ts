import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KeycloakService } from '../services/keycloak/keycloak.service';
import { EnchereResponse } from '../modelss/enchere-response';
import { jwtDecode } from 'jwt-decode';
import { Notification } from '../services/models';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicesssService {
 // private client: Client;

  private baseUrl = 'http://localhost:1920/enchere';

  constructor(private http: HttpClient, private keycloakService:KeycloakService ,  private toastr: ToastrService, private router: Router) {


  }


  saveenchere(requestBody: any, accessToken: string): Observable<any> {
    const apiUrl = 'http://localhost:1920/enchere/AjouterEnchere';

    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    if (requestBody.encherePrivee) {
      requestBody.codeAcces = this.generateCodeAcces(); // Générer un code d'accès si l'enchère est privée
    } else {
      requestBody.codeAcces = null; // Si l'enchère n'est pas privée, le code d'accès est null
    }
    return this.http.post(apiUrl, requestBody, { headers });
  }

  private generateCodeAcces(): string {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Générer un code à 4 chiffres
  }
  getListEnchereadmin(): Observable<EnchereResponse[]> {
    return this.http.get<EnchereResponse[]>(`${this.baseUrl}/AfficherListEnchere`).pipe(
      map(encheres => encheres.filter(enchere => !enchere.codeAcces)) // Filtre les résultats où codeAcces est nul ou undefined
    );
  }
  getListEnchere(): Observable<EnchereResponse[]>
   {
    return this.http.get<EnchereResponse[]>(this.baseUrl + "/AfficherListEnchere")
  }
  getListEnchereVip(): Observable<EnchereResponse[]>
  {
   return this.http.get<EnchereResponse[]>(this.baseUrl + "/AfficherListEnchere")
 }
 
  getListEnchereByType(type: string): Observable<EnchereResponse[]> {
    return this.http.get<EnchereResponse[]>(`${this.baseUrl}/AfficherListEnchereByType`, {
      params: { type }
    }).pipe(
      map((enchereList: EnchereResponse[]) => {
        // Filtrer les enchères où prixGagnant est null et l'état est 'Encours'
        return enchereList.filter(enchere => 
          enchere.prixGagnant === null && enchere.etat === 'Encours' && !enchere.codeAcces 
        );
      })
    );
  }
  
  getListEnchereByTypeTerminer(type: string): Observable<EnchereResponse[]> {
    return this.http.get<EnchereResponse[]>(`${this.baseUrl}/AfficherListEnchereByType`, {
      params: { type }
    }).pipe(
      map((enchereList: EnchereResponse[]) => {
        // Filtrer les enchères où l'état est "terminer"
        return enchereList.filter(enchere => enchere.etat === 'Terminer');
      })
    );
  }
  
  getListEnchere2(): Observable<EnchereResponse[]> {
    return this.http.get<EnchereResponse[]>(this.baseUrl + "/AfficherListEnchere")
      .pipe(
        map((enchereList: EnchereResponse[]) => {
          // Filtrer les enchères où prixGagnant n'est pas null
          return enchereList.filter(enchere => enchere.prixGagnant !== null);
        })
      );
  }
  getListEnchereTerminer(): Observable<EnchereResponse[]> {
    return this.http.get<EnchereResponse[]>(this.baseUrl + "/AfficherListEnchere")
      .pipe(
        map((enchereList: EnchereResponse[]) => {
          // Filtrer les enchères où l'état est "terminer"
          return enchereList.filter(enchere => enchere.etat === 'Terminer');
        })
      );
  }
  

  private apiUrlll = 'http://localhost:1920/enchere/cover';


  uploadEnchereCoverPicture(idEnchere: number, file: File, accessToken: string): Observable<any> 
  {
    const formData = new FormData();
    formData.append('file', file);
  
    const headers = new HttpHeaders({
      'Content-Type': ' multipart/form-data',
      'Authorization': `Bearer ${accessToken}`
    });
  
    return this.http.post(`${this.apiUrlll}/${idEnchere}`, formData, { headers });
  }
  uploadEnchereCoverPicture2(idEnchere: number, file: File): Observable<any> 
  {
    const formData = new FormData();
    formData.append('file', file);
  
    
  
    return this.http.post(`${this.apiUrlll}/${idEnchere}`, formData);
  }

  deleteEnchere(idEnchere: number | undefined, accessToken: string): Observable<any> {
    if (idEnchere === undefined) {
      throw new Error('idEnchere is undefined');
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    return this.http.delete(`${this.baseUrl}/DeleteEnchree?EnchereId=${idEnchere}`, { headers });
  }

  private stripe = 'http://localhost:1920/create-payment-intent'; // URL du backend Spring Boot
  createPaymentIntent(amount: number, productName: string, email: string): Observable<any> {
    return this.http.post<any>(this.stripe, { amount, productName, email });
  }
  private token: string | null;

 

  getUserId(): number | null {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.sub; // Assurez-vous que 'sub' est la clé correcte pour l'ID utilisateur dans votre token
      return userId;
    }
    return null;
  }

  private notifurl = 'http://localhost:1920/api/notifications';
  /*
  getUserNotifications(): Observable<Notification[]> {
    const userId = this.getUserId();
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    if (userId) {
      return this.http.get<Notification[]>(`${this.notifurl}`, { headers });
    }
    return new Observable<Notification[]>(); // ou gérer autrement
  }

  showNotifications(notifications: Notification[]): void {
    notifications.forEach(notification => {
      const notificationKey = `notification_${notification.id}`;
      const hasBeenDisplayed = localStorage.getItem(notificationKey);

      if (!hasBeenDisplayed) {
        this.toastr.info(notification.description, notification.title, {
          timeOut: 15000,
          closeButton: true,
          progressBar: true
        });

        // Marquer la notification comme affichée
        localStorage.setItem(notificationKey, 'true');
      }
    });
  }
  */
  getUserNotifications(): Observable<Notification[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<Notification[]>(`${this.notifurl}`, { headers });
  }
  showNotifications(notifications: Notification[]): void {
    const userId = this.getUserId();
  
    notifications.forEach(notification => {
      const notificationKey = `notification_${userId}_${notification.id}`; // Clé unique pour chaque utilisateur et notification
      const hasBeenDisplayed = localStorage.getItem(notificationKey);
  
      if (!hasBeenDisplayed) {
        this.toastr.info(notification.description, notification.title, {
          timeOut: 15000,
          closeButton: true,
          progressBar: true
        }).onTap
        .pipe(take(1)) // Process only the first tap/click
        .subscribe(() => this.handleNotificationClick(notification.auctionId));;
  
        localStorage.setItem(notificationKey, 'true');
      }
      
    
    });
 
  }
  handleNotificationClick(auctionId: number): void {
    // Rediriger vers la page de l'enchère
    this.router.navigate([`/u/pagesuserr/detailsnotif/${auctionId}`]);
  }

  
}

















/*
  baseUrl = "http://localhost:1920";
  constructor(private httpClient: HttpClient) { }

  userConnect(user: User): Observable<any> {
    return this.httpClient.post<User>(this.baseUrl + `/api/v1/auth/authenticate`, user);
  }
  ajoutenchere(enchere: Encheree,httpOptions: any): Observable<any> {
    return this.httpClient.post<Encheree>(this.baseUrl + `/enchere/AjouterEnchere`, Encheree, httpOptions);
  }
  */
 /*
  uploadEnchereCoverPicture(idEnchere: number, file: File, accessToken: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`
        });

    return this.http.post(this.apiUrlll + idEnchere, formData, { headers });
  }
  */
 /*
  ajouterEnchere(enchere: Encheree, token: string): Observable<number> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<number>(`${this.baseUrl}/AjouterEnchere`, enchere);
  }
 // , { headers }
    */