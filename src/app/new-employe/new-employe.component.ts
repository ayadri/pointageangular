import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employe } from '../model/employe.model';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-new-employe',
  templateUrl: './new-employe.component.html',
  styleUrls: ['./new-employe.component.css']
})
export class NewEmployeComponent implements OnInit{
  newEmployeFormGroup! : FormGroup;

  constructor(private fb : FormBuilder, private employeService: EmployeService, private router:Router) {
  }
  ngOnInit(): void{
    this.newEmployeFormGroup=this.fb.group({
      prenom : this.fb.control(null, [Validators.required, Validators.minLength(2)]),
      nom : this.fb.control(null, [Validators.required, Validators.minLength(2)]),
      email: this.fb.control(null,[Validators.required, Validators.email]),
      tel : this.fb.control(null,[Validators.required, Validators.minLength(10)]),
      cin : this.fb.control(null,[Validators.required, Validators.minLength(5)]),
      dateN : this.fb.control(null,[Validators.required])
    });
  }
  handleSaveEmploye(){

    let employe:Employe=this.newEmployeFormGroup.value; //toutes les données du formulaire vont etre stocker dans employe
    this.employeService.saveEmploye(employe).subscribe({
      next : data=>{
        alert("Employe a été ajouté ");
        //this.newEmployeFormGroup.reset();
        this.router.navigateByUrl("/admin/employes");
      },
      error : err=>{
        console.log(err);
      }
    });
  }
}
