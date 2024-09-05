/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPaymentIntent } from '../fn/stripe-service/create-payment-intent';
import { CreatePaymentIntent$Params } from '../fn/stripe-service/create-payment-intent';
import { Response } from '../models/response';

@Injectable({ providedIn: 'root' })
export class StripeServiceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createPaymentIntent()` */
  static readonly CreatePaymentIntentPath = '/create-payment-intent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPaymentIntent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPaymentIntent$Response(params: CreatePaymentIntent$Params, context?: HttpContext): Observable<StrictHttpResponse<Response>> {
    return createPaymentIntent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPaymentIntent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPaymentIntent(params: CreatePaymentIntent$Params, context?: HttpContext): Observable<Response> {
    return this.createPaymentIntent$Response(params, context).pipe(
      map((r: StrictHttpResponse<Response>): Response => r.body)
    );
  }

}
