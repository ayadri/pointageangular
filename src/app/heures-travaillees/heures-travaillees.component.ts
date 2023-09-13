import { Component } from '@angular/core';
import {EmployeService} from "../services/employe.service";

@Component({
  selector: 'app-heures-travaillees',
  templateUrl: './heures-travaillees.component.html',
  styleUrls: ['./heures-travaillees.component.css']
})
export class HeuresTravailleesComponent {
  employeNom!: string;
  resultatHeuresTravaillees: any;
  moisEnLettres: string[] = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  constructor(private employeService: EmployeService) {}

  calculerHeuresTravaillees() {
    this.employeService.calculerHeuresTravaillees(this.employeNom)
      .subscribe((resultat: any) => {
        // Convertissez les noms de mois en lettres
        const resultatEnLettres: any = {};
        for (const mois in resultat) {
          if (resultat.hasOwnProperty(mois)) {
            const moisEnLettres = this.moisEnLettres[parseInt(mois) - 1];
            const heuresTravaillees = parseFloat(resultat[mois]).toFixed(2);

            resultatEnLettres[moisEnLettres] = resultat[mois];
          }
        }
        this.resultatHeuresTravaillees = resultatEnLettres;
      });
  }
}
