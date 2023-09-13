

export interface Commentaire {
  id: number;
  commentaire: string;
  date: Date;
  employe: Employe;

}

export interface Employe {
  id : number;
  nom: string;
  prenom: string;
  email : string;
  tel: string;
  cin : string;
  dateN : Date;
}

