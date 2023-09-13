import { Component, OnInit } from '@angular/core';
import { CommentaireService } from "../services/commentaire.service";
import { AuthService } from "../services/auth.service";
import { CommentaireToSave} from "../model/commentaire-to-save";
import {Commentaire} from "../model/commentaire"; // Import the CommentaireToSave DTO

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {
  commentaires: Commentaire[] = [];
  nouveauCommentaire: CommentaireToSave = { commentaire: '', date: new Date(), nomEmployer: '' }; // Initialize with empty values

  constructor(private commentaireService: CommentaireService, public authService: AuthService) { }

  ngOnInit(): void {
    this.fetchCommentaires();
  }

  fetchCommentaires(): void {
    this.commentaireService.getAllCommentaires().subscribe(
      commentaires => {
        console.log(commentaires); // Ajoutez cette ligne pour afficher les données dans la console
        this.commentaires = commentaires;
      },
      error => {
        console.error(error);
      }
    );
  }


  ajouterCommentaire(): void {
    // Set the employee's name from AuthService
    this.nouveauCommentaire.date = new Date(); // Set the current date
    this.nouveauCommentaire.nomEmployer = this.authService.username;

    this.commentaireService.addCommentaire(this.nouveauCommentaire).subscribe(
      (commentaireAjoute: Commentaire) => {
        this.commentaires.push(commentaireAjoute);
        this.nouveauCommentaire = { commentaire: '', date: new Date(), nomEmployer: '' }; // Reset the form

      },
      error => {
        console.error(error);
      }
    );
  }
}
