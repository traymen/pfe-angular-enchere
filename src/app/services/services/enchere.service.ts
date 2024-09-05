/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ajooutEcnhereTerminer } from '../fn/enchere/ajoout-ecnhere-terminer';
import { AjooutEcnhereTerminer$Params } from '../fn/enchere/ajoout-ecnhere-terminer';
import { deleteEnchere } from '../fn/enchere/delete-enchere';
import { DeleteEnchere$Params } from '../fn/enchere/delete-enchere';
import { Enchere } from '../models/enchere';
import { EnchereResponse } from '../models/enchere-response';
import { getEnchById } from '../fn/enchere/get-ench-by-id';
import { GetEnchById$Params } from '../fn/enchere/get-ench-by-id';
import { getEnchereByCodeAcces } from '../fn/enchere/get-enchere-by-code-acces';
import { GetEnchereByCodeAcces$Params } from '../fn/enchere/get-enchere-by-code-acces';
import { getListEnchere } from '../fn/enchere/get-list-enchere';
import { GetListEnchere$Params } from '../fn/enchere/get-list-enchere';
import { getListEnchereType } from '../fn/enchere/get-list-enchere-type';
import { GetListEnchereType$Params } from '../fn/enchere/get-list-enchere-type';
import { modifpost } from '../fn/enchere/modifpost';
import { Modifpost$Params } from '../fn/enchere/modifpost';
import { saveEnchere } from '../fn/enchere/save-enchere';
import { SaveEnchere$Params } from '../fn/enchere/save-enchere';
import { uploadEnchereCoverPicture } from '../fn/enchere/upload-enchere-cover-picture';
import { UploadEnchereCoverPicture$Params } from '../fn/enchere/upload-enchere-cover-picture';

@Injectable({ providedIn: 'root' })
export class EnchereService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `uploadEnchereCoverPicture()` */
  static readonly UploadEnchereCoverPicturePath = '/enchere/cover/{enchere-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadEnchereCoverPicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadEnchereCoverPicture$Response(params: UploadEnchereCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadEnchereCoverPicture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadEnchereCoverPicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadEnchereCoverPicture(params: UploadEnchereCoverPicture$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadEnchereCoverPicture$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `modifpost()` */
  static readonly ModifpostPath = '/enchere/ModifierEnchere';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifpost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifpost$Response(params: Modifpost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return modifpost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifpost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifpost(params: Modifpost$Params, context?: HttpContext): Observable<void> {
    return this.modifpost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `saveEnchere()` */
  static readonly SaveEncherePath = '/enchere/AjouterEnchere';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveEnchere()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEnchere$Response(params: SaveEnchere$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveEnchere(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveEnchere$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEnchere(params: SaveEnchere$Params, context?: HttpContext): Observable<number> {
    return this.saveEnchere$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `ajooutEcnhereTerminer()` */
  static readonly AjooutEcnhereTerminerPath = '/enchere/AjoutEnchereTerminer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajooutEcnhereTerminer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajooutEcnhereTerminer$Response(params: AjooutEcnhereTerminer$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return ajooutEcnhereTerminer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajooutEcnhereTerminer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajooutEcnhereTerminer(params: AjooutEcnhereTerminer$Params, context?: HttpContext): Observable<void> {
    return this.ajooutEcnhereTerminer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getEnchereByCodeAcces()` */
  static readonly GetEnchereByCodeAccesPath = '/enchere/getEnchereByCodeAcces';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEnchereByCodeAcces()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEnchereByCodeAcces$Response(params: GetEnchereByCodeAcces$Params, context?: HttpContext): Observable<StrictHttpResponse<Enchere>> {
    return getEnchereByCodeAcces(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEnchereByCodeAcces$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEnchereByCodeAcces(params: GetEnchereByCodeAcces$Params, context?: HttpContext): Observable<Enchere> {
    return this.getEnchereByCodeAcces$Response(params, context).pipe(
      map((r: StrictHttpResponse<Enchere>): Enchere => r.body)
    );
  }

  /** Path part for operation `getEnchById()` */
  static readonly GetEnchByIdPath = '/enchere/EnchereById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEnchById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEnchById$Response(params: GetEnchById$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EnchereResponse>>> {
    return getEnchById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEnchById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEnchById(params: GetEnchById$Params, context?: HttpContext): Observable<Array<EnchereResponse>> {
    return this.getEnchById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EnchereResponse>>): Array<EnchereResponse> => r.body)
    );
  }

  /** Path part for operation `getListEnchere()` */
  static readonly GetListEncherePath = '/enchere/AfficherListEnchere';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getListEnchere()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListEnchere$Response(params?: GetListEnchere$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EnchereResponse>>> {
    return getListEnchere(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getListEnchere$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListEnchere(params?: GetListEnchere$Params, context?: HttpContext): Observable<Array<EnchereResponse>> {
    return this.getListEnchere$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EnchereResponse>>): Array<EnchereResponse> => r.body)
    );
  }

  /** Path part for operation `getListEnchereType()` */
  static readonly GetListEnchereTypePath = '/enchere/AfficherListEnchereByType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getListEnchereType()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListEnchereType$Response(params: GetListEnchereType$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EnchereResponse>>> {
    return getListEnchereType(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getListEnchereType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListEnchereType(params: GetListEnchereType$Params, context?: HttpContext): Observable<Array<EnchereResponse>> {
    return this.getListEnchereType$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EnchereResponse>>): Array<EnchereResponse> => r.body)
    );
  }

  /** Path part for operation `deleteEnchere()` */
  static readonly DeleteEncherePath = '/enchere/DeleteEnchree';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEnchere()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnchere$Response(params: DeleteEnchere$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteEnchere(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEnchere$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnchere(params: DeleteEnchere$Params, context?: HttpContext): Observable<void> {
    return this.deleteEnchere$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
