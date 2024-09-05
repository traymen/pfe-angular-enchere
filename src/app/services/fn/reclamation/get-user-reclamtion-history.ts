/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReclamationResponse } from '../../models/reclamation-response';

export interface GetUserReclamtionHistory$Params {
}

export function getUserReclamtionHistory(http: HttpClient, rootUrl: string, params?: GetUserReclamtionHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReclamationResponse>>> {
  const rb = new RequestBuilder(rootUrl, getUserReclamtionHistory.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ReclamationResponse>>;
    })
  );
}

getUserReclamtionHistory.PATH = '/reclamation/historiqueReclamtion';
