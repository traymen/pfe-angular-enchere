/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EnchereResponse } from '../../models/enchere-response';

export interface GetListEnchere$Params {
}

export function getListEnchere(http: HttpClient, rootUrl: string, params?: GetListEnchere$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EnchereResponse>>> {
  const rb = new RequestBuilder(rootUrl, getListEnchere.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EnchereResponse>>;
    })
  );
}

getListEnchere.PATH = '/enchere/AfficherListEnchere';
