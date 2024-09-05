/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addFavorite } from '../fn/favoris/add-favorite';
import { AddFavorite$Params } from '../fn/favoris/add-favorite';
import { FavorisByUser } from '../models/favoris-by-user';
import { getListFavoriss } from '../fn/favoris/get-list-favoriss';
import { GetListFavoriss$Params } from '../fn/favoris/get-list-favoriss';
import { supprimerFavoris } from '../fn/favoris/supprimer-favoris';
import { SupprimerFavoris$Params } from '../fn/favoris/supprimer-favoris';

@Injectable({ providedIn: 'root' })
export class FavorisService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addFavorite()` */
  static readonly AddFavoritePath = '/favoris/AjoutFavoris';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addFavorite()` instead.
   *
   * This method doesn't expect any request body.
   */
  addFavorite$Response(params: AddFavorite$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return addFavorite(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addFavorite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addFavorite(params: AddFavorite$Params, context?: HttpContext): Observable<void> {
    return this.addFavorite$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getListFavoriss()` */
  static readonly GetListFavorissPath = '/favoris/ListeFavory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getListFavoriss()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListFavoriss$Response(params?: GetListFavoriss$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FavorisByUser>>> {
    return getListFavoriss(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getListFavoriss$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getListFavoriss(params?: GetListFavoriss$Params, context?: HttpContext): Observable<Array<FavorisByUser>> {
    return this.getListFavoriss$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FavorisByUser>>): Array<FavorisByUser> => r.body)
    );
  }

  /** Path part for operation `supprimerFavoris()` */
  static readonly SupprimerFavorisPath = '/favoris/favorites/{idFavoris}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerFavoris()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerFavoris$Response(params: SupprimerFavoris$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return supprimerFavoris(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerFavoris$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerFavoris(params: SupprimerFavoris$Params, context?: HttpContext): Observable<void> {
    return this.supprimerFavoris$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
