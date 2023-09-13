import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import {Pause} from "../model/pause.model";

@Injectable({
  providedIn: 'root'
})

export class PauseService {

  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {
  }

  calculerDureePause(pointages: string[]): Observable<string> {
    const params = new HttpParams().set('pointages', pointages.join(','));

    return this.http.get<string>(`${this.baseUrl}/calcul-duree-pause`, {params});
  }
}
