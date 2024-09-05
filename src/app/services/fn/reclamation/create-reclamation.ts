/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reclamation } from '../../models/reclamation';

export interface CreateReclamation$Params {
      body: Reclamation
}

export function createReclamation(http: HttpClient, rootUrl: string, params: CreateReclamation$Params, context?: HttpContext): Observable<StrictHttpResponse<Reclamation>> {
  const rb = new RequestBuilder(rootUrl, createReclamation.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Reclamation>;
    })
  );
}

createReclamation.PATH = '/reclamation';
