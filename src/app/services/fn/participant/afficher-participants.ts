/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Participant } from '../../models/participant';

export interface AfficherParticipants$Params {
  idEnch: number;
}

export function afficherParticipants(http: HttpClient, rootUrl: string, params: AfficherParticipants$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Participant>>> {
  const rb = new RequestBuilder(rootUrl, afficherParticipants.PATH, 'get');
  if (params) {
    rb.query('idEnch', params.idEnch, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Participant>>;
    })
  );
}

afficherParticipants.PATH = '/participant/ListeParticipationByIdEnchere';
