export class CommentaireToSave {
  commentaire: string;
  nomEmployer: string;
  date: Date;

  constructor(message: string, nomEmployer: string) {
    this.commentaire = message;
    this.date = new Date();
    this.nomEmployer = nomEmployer;
  }
}
