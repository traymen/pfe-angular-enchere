/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EnchereResponse } from '../../models/enchere-response';

export interface GetListEnchereType$Params {
  type: 'VETEMENTSPORT' | 'ELECTRONIQUE' | 'VETEMENT' | 'VOITURE' | 'ELECTROMENAGER' | 'MONTREetBIJOUX';
}

export function getListEnchereType(http: HttpClient, rootUrl: string, params: GetListEnchereType$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EnchereResponse>>> {
  const rb = new RequestBuilder(rootUrl, getListEnchereType.PATH, 'get');
  if (params) {
    rb.query('type', params.type, {});
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

getListEnchereType.PATH = '/enchere/AfficherListEnchereByType';
