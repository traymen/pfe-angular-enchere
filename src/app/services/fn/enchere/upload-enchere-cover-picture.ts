/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface UploadEnchereCoverPicture$Params {
  'enchere-id': number;
      body?: {
'file': Blob;
}
}

export function uploadEnchereCoverPicture(http: HttpClient, rootUrl: string, params: UploadEnchereCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, uploadEnchereCoverPicture.PATH, 'post');
  if (params) {
    rb.path('enchere-id', params['enchere-id'], {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      }>;
    })
  );
}

uploadEnchereCoverPicture.PATH = '/enchere/cover/{enchere-id}';
