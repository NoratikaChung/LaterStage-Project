import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  constructor(private http: HttpClient) { }

  getSitesData(): Observable<any> {
    return this.http.get('/assets/sites-data.json');
  }
}


