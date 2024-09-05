/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Enchere } from '../../models/enchere';

export interface GetEnchereByCodeAcces$Params {
  codeAcces: string;
}

export function getEnchereByCodeAcces(http: HttpClient, rootUrl: string, params: GetEnchereByCodeAcces$Params, context?: HttpContext): Observable<StrictHttpResponse<Enchere>> {
  const rb = new RequestBuilder(rootUrl, getEnchereByCodeAcces.PATH, 'get');
  if (params) {
    rb.query('codeAcces', params.codeAcces, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Enchere>;
    })
  );
}

getEnchereByCodeAcces.PATH = '/enchere/getEnchereByCodeAcces';
