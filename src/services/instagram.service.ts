import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { IInstagram, IBrinkImage } from '../models';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable()
export class InstagramService {
  constructor(private httpClient: HttpClient) {}

  getImage(code: string): Observable<IInstagram> {
    const url = `https://api.instagram.com/oembed?url=http://instagr.am/p/${code}`;
    return this.httpClient
      .get<IInstagram>(url)
      .pipe(catchError((err: any) => Observable.throw('There was an error')));
  }
}
