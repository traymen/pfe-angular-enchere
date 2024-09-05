/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Participant } from '../../models/participant';

export interface SaveParticipationVip$Params {
  codeAcces: string;
      body: Participant
}

export function saveParticipationVip(http: HttpClient, rootUrl: string, params: SaveParticipationVip$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, saveParticipationVip.PATH, 'post');
  if (params) {
    rb.query('codeAcces', params.codeAcces, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

saveParticipationVip.PATH = '/participant/AjouterParticipationVip';
