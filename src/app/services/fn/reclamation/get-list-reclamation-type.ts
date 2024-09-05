/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReclamationResponse } from '../../models/reclamation-response';

export interface GetListReclamationType$Params {
  type: 'ProblemeEnchere' | 'ProblemePaiement' | 'Problemecompteutilisateur' | 'Problemetechnique';
}

export function getListReclamationType(http: HttpClient, rootUrl: string, params: GetListReclamationType$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReclamationResponse>>> {
  const rb = new RequestBuilder(rootUrl, getListReclamationType.PATH, 'get');
  if (params) {
    rb.query('type', params.type, {});
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

getListReclamationType.PATH = '/reclamation/AfficherListReclamtionByType';
