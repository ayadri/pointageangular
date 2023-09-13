import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PointageService } from '../services/pointage.service';
import {AuthService} from "../services/auth.service";
import {Pointage, StatusPointage} from "../model/pointage.model";
import {CommentaireService} from "../services/commentaire.service";
import {Commentaire} from "../model/commentaire";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [PointageService],
})
export class HomeComponent implements OnInit {
  pointages: any[] = [];
  commentaires: Commentaire[] = [];
  constructor(private pointageService: PointageService, private authService: AuthService, private commentaireService: CommentaireService) {}

  ngOnInit(): void {

    this.loadPointages();


  }


loadPointages(): void {
    this.pointageService.getPointages().subscribe(
      (data) => {
        this.pointages = data;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  /*ngAfterViewInit(): void {
    const buttons = document.querySelectorAll('.btn-info[data-id]');
    buttons.forEach((button: Element) => {
      button.addEventListener('click', (event) => {
        const target = event.currentTarget as HTMLElement; // Convertir en HTMLElement
        const id = target.getAttribute('data-id');
        if (id) {
          this.addPointageSortie();        }
      });
    });
  }*/

  ngAfterViewInit(): void {
    const buttons = document.querySelectorAll('.btn-info[data-id]');
    buttons.forEach((button: Element) => {
      button.addEventListener('click', () => {
        this.addPointageSortie();
      });
    });
  }


 addPointageArrive(): void {
    let employeN = this.authService.username;
    this.pointageService.addPointageArrive(employeN).subscribe(
      (data) => {
        console.log('Pointage arrivé ajouté:', data);
        this.loadPointages(); // Rechargez la liste après l'ajout
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
  addPointageSortie(): void {
    let employeN = this.authService.username;
    this.pointageService.addPointageSortie(employeN).subscribe(
      (data) => {
        console.log('Pointage de sortie ajouté :', data);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'ajout du pointage de sortie :', error);
      }
    );
  }



  addPointageDebutPause(): void {
    let employeN = this.authService.username;
    this.pointageService.addPointageDebutPause(employeN).subscribe(
      (data) => {
        console.log('Pointage de début de pause ajouté :', data);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'ajout du pointage de début de pause :', error);
      }
    );
  }

  addPointageFinPause(): void {
    let employeN = this.authService.username;
    this.pointageService.addPointageFinPause(employeN).subscribe(
      (data) => {
        console.log('Pointage de fin de pause ajouté :', data);
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de l\'ajout du pointage de fin de pause :', error);
      }
    );
  }



}
