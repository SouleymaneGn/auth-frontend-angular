import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  httpClient = inject(HttpClient);
  baseUrl: string = 'http://localhost:3333/v1/account/';

  lagout(){}
}
