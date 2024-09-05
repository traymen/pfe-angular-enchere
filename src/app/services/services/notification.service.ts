/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAllNotifications } from '../fn/notification/get-all-notifications';
import { GetAllNotifications$Params } from '../fn/notification/get-all-notifications';
import { Notification } from '../models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllNotifications()` */
  static readonly GetAllNotificationsPath = '/api/notifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllNotifications$Response(params?: GetAllNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Notification>>> {
    return getAllNotifications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllNotifications(params?: GetAllNotifications$Params, context?: HttpContext): Observable<Array<Notification>> {
    return this.getAllNotifications$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Notification>>): Array<Notification> => r.body)
    );
  }

}
