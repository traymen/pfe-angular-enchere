/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createReclamation } from '../fn/reclamation/create-reclamation';
import { CreateReclamation$Params } from '../fn/reclamation/create-reclamation';
import { deleteReclamation } from '../fn/reclamation/delete-reclamation';
import { DeleteReclamation$Params } from '../fn/reclamation/delete-reclamation';
import { getListReclamationn } from '../fn/reclamation/get-list-reclamationn';
import { GetListReclamationn$Params } from '../fn/reclamation/get-list-reclamationn';
import { getListReclamationType } from '../fn/reclamation/get-list-reclamation-type';
import { GetListReclamationType$Params } from '../fn/reclamation/get-list-reclamation-type';
import { getUserReclamtionHistory } from '../fn/reclamation/get-user-reclamtion-history';
import { GetUserReclamtionHistory$Params } from '../fn/reclamation/get-user-reclamtion-history';
import { Reclamation } from '../models/reclamation';
import { ReclamationResponse } from '../models/reclamation-response';
import { reponseReclamtion } from '../fn/reclamation/reponse-reclamtion';
import { ReponseReclamtion$Params } from '../fn/reclamation/reponse-reclamtion';

@Injectable({ providedIn: 'root' })
export class ReclamationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createReclamation()` */
  static readonly CreateReclamationPath = '/reclamation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createReclamation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReclamation$Response(params: CreateReclamation$Params, context?: HttpContext): Observable<StrictHttpResponse<Reclamation>> {
    return createReclamation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createReclamation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReclamation(params: CreateReclamation$Params, context?: HttpContext): Observable<Reclamation> {
    return this.createReclamation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reclamation>): Reclamation => r.body)
    );
  }

  /** Path part for operation `reponseReclamtion()` */
  static readonly ReponseReclamtionPath = '/reclamation/AjoutReponseReclamtion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reponseReclamtion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reponseReclamtion$Response(params: ReponseReclamtion$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return reponseReclamtion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reponseReclamtion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  reponseReclamtion(params: ReponseReclamtion$Params, context?: HttpContext): Observable<void> {
    return this.reponseReclamtion$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getUserReclamtionHistory()` */
  static readonly GetUserReclamtionHistoryPath = '/reclamation/historiqueReclamtion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserReclamtionHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReclamtionHistory$Response(params?: GetUserReclamtionHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReclamationResponse>>> {
    return getUserReclamtionHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserReclamtionHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReclamtionHistory(params?: GetUserReclamtionHistory$Params, context?: HttpContext): Observable<Array<ReclamationResponse>> {
    return this.getUserReclamtionHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ReclamationResponse>>): Array<ReclamationResponse> => r.body)
    );
  }

  /** Path part for operation `getListReclamationType()` */
  static readonly GetListReclamationTypePath = '/reclamation/AfficherListReclamtionByType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getListReclamationType()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListReclamationType$Response(params: GetListReclamationType$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReclamationResponse>>> {
    return getListReclamationType(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getListReclamationType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListReclamationType(params: GetListReclamationType$Params, context?: HttpContext): Observable<Array<ReclamationResponse>> {
    return this.getListReclamationType$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ReclamationResponse>>): Array<ReclamationResponse> => r.body)
    );
  }

  /** Path part for operation `getListReclamationn()` */
  static readonly GetListReclamationnPath = '/reclamation/AfficherListReclamation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getListReclamationn()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListReclamationn$Response(params?: GetListReclamationn$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReclamationResponse>>> {
    return getListReclamationn(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getListReclamationn$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListReclamationn(params?: GetListReclamationn$Params, context?: HttpContext): Observable<Array<ReclamationResponse>> {
    return this.getListReclamationn$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ReclamationResponse>>): Array<ReclamationResponse> => r.body)
    );
  }

  /** Path part for operation `deleteReclamation()` */
  static readonly DeleteReclamationPath = '/reclamation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReclamation()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReclamation$Response(params: DeleteReclamation$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteReclamation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteReclamation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReclamation(params: DeleteReclamation$Params, context?: HttpContext): Observable<void> {
    return this.deleteReclamation$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
