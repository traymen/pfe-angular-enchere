/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ParticipantCountDto } from '../../models/participant-count-dto';

export interface GetParticipantCounts$Params {
}

export function getParticipantCounts(http: HttpClient, rootUrl: string, params?: GetParticipantCounts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ParticipantCountDto>>> {
  const rb = new RequestBuilder(rootUrl, getParticipantCounts.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ParticipantCountDto>>;
    })
  );
}

getParticipantCounts.PATH = '/participant/counts';
