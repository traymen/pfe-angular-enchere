/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EnchereResponse } from '../../models/enchere-response';

export interface GetEnchById$Params {
  idEnch: number;
}

export function getEnchById(http: HttpClient, rootUrl: string, params: GetEnchById$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EnchereResponse>>> {
  const rb = new RequestBuilder(rootUrl, getEnchById.PATH, 'get');
  if (params) {
    rb.query('idEnch', params.idEnch, {});
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

getEnchById.PATH = '/enchere/EnchereById';
