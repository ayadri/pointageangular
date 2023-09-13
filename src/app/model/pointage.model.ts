
export interface Pointage {
  id: number;
  pointage: StatusPointage;
  datePointage: Date;
  employe: Employe;
}
export enum StatusPointage {
  ARRIVAGE,FIN,DEBUTPAUSE , FINPAUSE
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
