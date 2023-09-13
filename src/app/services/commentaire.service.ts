import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire} from "../model/commentaire";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private baseUrl = 'http://localhost:9090'; // L'URL de votre backend

  constructor(private http: HttpClient) {}

  getAllCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/getAllCommentaires`);
  }


  getCommentaireById(id: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(`${this.baseUrl}/getCommentairesById/${id}`);
  }

  searchCommentairesByDate(keyword: Date): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/getAllCommentaires/search?keyword=${keyword}`);
  }

  addCommentaire(commentaire: { date: Date; commentaire: string }): Observable<Commentaire> {
    return this.http.post<Commentaire>(`${this.baseUrl}/addCommentaire`, commentaire);
  }
}
