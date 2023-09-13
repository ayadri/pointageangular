import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Pointage } from '../model/pointage.model'; // Assurez-vous d'importer correctement le modèle Pointage

@Injectable({
  providedIn: 'root'
})
export class PointageService {
  private apiUrl = 'http://localhost:9090/pointages';

  constructor(private http: HttpClient) { }

  getPointages(): Observable<Pointage[]> {
    return this.http.get<Pointage[]>(environment.backendHost + '/getAllPointages');
  }
  addPointageArrive(employeN: string): Observable<Pointage> {
    return this.http.get<Pointage>(environment.backendHost + '/pointageArriver/'+employeN);
  }

  searchPointages(keyword: string): Observable<Pointage[]> {
    return this.http.get<Pointage[]>(environment.backendHost + '/getAllPointages/search?keyword=' + keyword);
  }

  getPointageById(id: number): Observable<Pointage> {
    return this.http.get<Pointage>(environment.backendHost + '/getPointageById/' + id);
  }

  addPointageSortie(employeN: string): Observable<Pointage> {
    return this.http.get<Pointage>(environment.backendHost + '/pointageSortie/' + employeN);
  }

  addPointageDebutPause(employeN: string): Observable<Pointage> {
    return this.http.get<Pointage>(environment.backendHost + '/pointageDebutPause/' + employeN);
  }

  addPointageFinPause(employeN: string): Observable<Pointage> {
    return this.http.get<Pointage>(environment.backendHost + '/pointageFinPause/' + employeN);
  }
  enregistrerPointage(pointage: Pointage): Observable<Pointage> {
    return this.http.post<Pointage>(this.apiUrl, pointage);
  }
  calculateWorkedHours(employeN: string): Observable<number>{
    return this.http.get<number>(environment.backendHost+ '/worked-hours/' +employeN);
  }

}
