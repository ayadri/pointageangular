import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {EmployeService} from "../services/employe.service";
import {map, Observable} from "rxjs";
import {Employe} from "../model/employe.model";
import { throwError, catchError } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']

})
export class EmployesComponent implements OnInit {
  employes!: Observable<Array<Employe>>;
  errorMessage!: string;
  searchFormGroup: FormGroup | undefined;

  constructor(private employeService: EmployeService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });
    this.handleSearchEmployes();

  }

  handleSearchEmployes() {
    this.employes = this.employeService.getEmployes().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteEmploye(c: Employe) {
    let conf = confirm("Vous êtes sure?");
    if (!conf) return;
    this.employeService.deleteEmploye(c.id).subscribe({
      next: resp => {
        this.employes = this.employes.pipe(
          map(data => {
            //donne moi l'index de l'element de l employe et on le supprime
            let index = data.indexOf(c);
            data.slice(index, 1)
            return data;
          })
        )
      },
      error: err => {
        console.log(err);
      }
    })
  }



}

