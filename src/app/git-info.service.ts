import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitInfoService {


   URL = 'https://api.github.com/users';
  

  constructor(private http: HttpClient) { }


  getUsers(){

    return this.http.get(this.URL)

  }

}
