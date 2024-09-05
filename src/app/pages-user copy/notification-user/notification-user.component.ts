import { Component , OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicesssService } from 'src/app/servicessss/servicesss.service';

@Component({
  selector: 'app-notification-user',
  templateUrl: './notification-user.component.html',
  styleUrls: ['./notification-user.component.css']
})
export class NotificationUserComponent {
  /*
  notifications: any[] = [];
  private notificationSubscription: Subscription | null = null; // Initialisation à null

  constructor(private notificationService: ServicesssService , notificationSubscription: Subscription ) { }


  ngOnInit() {
    this.notificationService.connect();

    this.notificationSubscription = this.notificationService.subscribeToNotifications().subscribe(notification => {
      this.notifications.push(notification);
      console.log('New notification:', notification);
    });
  }

  ngOnDestroy() {
    if (this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
    }
    this.notificationService.disconnect();
  }
  */
}
