/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherParticipants } from '../fn/participant/afficher-participants';
import { AfficherParticipants$Params } from '../fn/participant/afficher-participants';
import { getParticipantCounts } from '../fn/participant/get-participant-counts';
import { GetParticipantCounts$Params } from '../fn/participant/get-participant-counts';
import { getUserParticipationHistory } from '../fn/participant/get-user-participation-history';
import { GetUserParticipationHistory$Params } from '../fn/participant/get-user-participation-history';
import { HistoriqueParticipation } from '../models/historique-participation';
import { Participant } from '../models/participant';
import { ParticipantCountDto } from '../models/participant-count-dto';
import { saveParticipation } from '../fn/participant/save-participation';
import { SaveParticipation$Params } from '../fn/participant/save-participation';
import { saveParticipationVip } from '../fn/participant/save-participation-vip';
import { SaveParticipationVip$Params } from '../fn/participant/save-participation-vip';

@Injectable({ providedIn: 'root' })
export class ParticipantService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveParticipation()` */
  static readonly SaveParticipationPath = '/participant/AjouterParticipation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveParticipation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveParticipation$Response(params: SaveParticipation$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return saveParticipation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveParticipation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveParticipation(params: SaveParticipation$Params, context?: HttpContext): Observable<void> {
    return this.saveParticipation$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `saveParticipationVip()` */
  static readonly SaveParticipationVipPath = '/participant/AjouterParticipationVip';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveParticipationVip()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveParticipationVip$Response(params: SaveParticipationVip$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return saveParticipationVip(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveParticipationVip$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveParticipationVip(params: SaveParticipationVip$Params, context?: HttpContext): Observable<void> {
    return this.saveParticipationVip$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getUserParticipationHistory()` */
  static readonly GetUserParticipationHistoryPath = '/participant/historique';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserParticipationHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserParticipationHistory$Response(params?: GetUserParticipationHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HistoriqueParticipation>>> {
    return getUserParticipationHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserParticipationHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserParticipationHistory(params?: GetUserParticipationHistory$Params, context?: HttpContext): Observable<Array<HistoriqueParticipation>> {
    return this.getUserParticipationHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HistoriqueParticipation>>): Array<HistoriqueParticipation> => r.body)
    );
  }

  /** Path part for operation `getParticipantCounts()` */
  static readonly GetParticipantCountsPath = '/participant/counts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getParticipantCounts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParticipantCounts$Response(params?: GetParticipantCounts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ParticipantCountDto>>> {
    return getParticipantCounts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getParticipantCounts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParticipantCounts(params?: GetParticipantCounts$Params, context?: HttpContext): Observable<Array<ParticipantCountDto>> {
    return this.getParticipantCounts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ParticipantCountDto>>): Array<ParticipantCountDto> => r.body)
    );
  }

  /** Path part for operation `afficherParticipants()` */
  static readonly AfficherParticipantsPath = '/participant/ListeParticipationByIdEnchere';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherParticipants()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherParticipants$Response(params: AfficherParticipants$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Participant>>> {
    return afficherParticipants(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherParticipants$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherParticipants(params: AfficherParticipants$Params, context?: HttpContext): Observable<Array<Participant>> {
    return this.afficherParticipants$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Participant>>): Array<Participant> => r.body)
    );
  }

}
