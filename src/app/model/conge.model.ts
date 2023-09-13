export interface Conge{
  id : number;
  motif: string;
  dateDemande: Date;
  dateDebutC: Date;
  dateFinC: Date;
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
