import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employe} from "../model/employe.model";
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  employes: any;
  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:9090';

  public getEmployes():Observable<Array<Employe>>{
    return this.http.get<Array<Employe>>(environment.backendHost+"/getAllEmployes")
  }
  public searchEmployes(keyword : string):Observable<Array<Employe>>{
    return this.http.get<Array<Employe>>(environment.backendHost+"/getAllEmployes/search?keyword="+keyword)
  }
  getEmployeById(id: number): Employe | undefined {
    return this.employes.find((employe: { id: number; }) => employe.id === id);
  }
  //pour ajouter un employe
  public saveEmploye(employe: Employe):Observable<Employe>{
    return this.http.post<Employe>(environment.backendHost+"/addEmploye",employe);
  }
  public deleteEmploye(id: number):Observable<any>{
    return this.http.delete<any>(environment.backendHost+"/deleteEmployeById/"+id);
  }
  public updateEmploye( data : any,id: number):Observable<any>{
    return this.http.patch(environment.backendHost+"/updateEmployeById/"+id, data);
  }
  public calculerHeuresTravaillees(employeNom: string): Observable<any> {
    // Utilisez la route et le paramètre correspondants du backend.
    const endpoint = `${this.apiUrl}/heures-travaillees-par-mois/${employeNom}`;

    return this.http.get(endpoint);
  }
}
