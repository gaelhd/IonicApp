import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:44308/api/login';
  constructor(private http: HttpClient) { }

  login(user: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = JSON.stringify({ user, password });

    return this.http.post<any>(this.apiUrl, body, httpOptions);
  }
}
