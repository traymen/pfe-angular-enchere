/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReclamationResponse } from '../../models/reclamation-response';

export interface GetListReclamationn$Params {
}

export function getListReclamationn(http: HttpClient, rootUrl: string, params?: GetListReclamationn$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReclamationResponse>>> {
  const rb = new RequestBuilder(rootUrl, getListReclamationn.PATH, 'get');
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

getListReclamationn.PATH = '/reclamation/AfficherListReclamation';
