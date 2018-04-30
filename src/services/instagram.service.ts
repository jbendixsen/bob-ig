import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http } from '@angular/http';

import { IInstagram, IBrinkImage } from '../models';
import { Observable } from 'rxjs/Observable';
// import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MessageService } from './message.service';

@Injectable()
export class InstagramService {

  constructor(
    private httpClient: HttpClient,
    private http: Http
  ) { }

  // https://www.instagram.com/p/BdOExVWnwsL/?taken-by=brinkofbeyond

  // https://api.instagram.com/oembed?url=http://instagr.am/p/fA9uwTtkSN/

  // https://api.instagram.com/oembed?url=http://instagr.am/p/BdOExVWnwsL

  // https://instagram.com/p/BKhxnkCj_bR/media/?size=t

  // Using Http
  getImage(code: string): Observable<IInstagram> {
    const url = `https://api.instagram.com/oembed?url=http://instagr.am/p/${code}`;
    // console.log(`This URL: ${url}`);
    return this.http.get(url)
      .map(res => res.json())
      .catch((err: any) => Observable.throw(this.errorHandler(err)));
  }

  errorHandler(error: any): void {
    console.error(error);
  }

}
