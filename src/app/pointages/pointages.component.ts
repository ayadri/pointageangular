import { Component, OnInit } from '@angular/core';
import { Pointage } from '../model/pointage.model';
import { PointageService } from '../services/pointage.service';
import { catchError } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointages.component.html',
})
export class PointageComponent implements OnInit {
  pointages$: Observable<Pointage[]> = new Observable<Pointage[]>(); // Initialisez la variable pointages$
  keyword: string = '';
  errorMessage!: string;

  constructor(private pointageService: PointageService) {}

  ngOnInit(): void {
    this.getPointages();
  }

  getPointages(): void {
    this.pointages$ = this.pointageService.getPointages().pipe(
      catchError((error: any) => {
        this.errorMessage =
          'Une erreur s\'est produite lors de la récupération des pointages : ' +
          error.message;
        return throwError(error);
      })
    );
  }

  searchPointages(): void {
    if (this.keyword.trim() !== '') {
      this.pointages$ = this.pointageService
        .searchPointages(this.keyword)
        .pipe(
          catchError((error: any) => {
            this.errorMessage =
              'Une erreur s\'est produite lors de la recherche des pointages : ' +
              error.message;
            return throwError(error);
          })
        );
    } else {
      this.getPointages();
    }
  }

  // ...

}
