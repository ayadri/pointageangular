import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import {EmployesComponent} from "./employes/employes.component";
import { HomeComponent } from './home/home.component';
import { NewEmployeComponent } from './new-employe/new-employe.component';
import { PointageComponent } from './pointages/pointages.component';
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {CommentairesComponent} from "./commentaires/commentaires.component";
import {PauseCalculatorComponent} from "./pause-calculator/pause-calculator.component";
import {HeuresTravailleesComponent} from "./heures-travaillees/heures-travaillees.component";





const routes: Routes = [

  { path : "login", component : LoginComponent},
  { path : "admin", component : AdminTemplateComponent, canActivate : [AuthenticationGuard]
    , children:[
      { path : "pointages", component : PointageComponent, canActivate: [AuthorizationGuard], data: {role:"ADMIN"}},
      { path : "employes", component : EmployesComponent, canActivate: [AuthorizationGuard], data: {role:"ADMIN"}},
      { path : "notAuthorized", component : NotAuthorizedComponent},

      {path: "new-employe", component: NewEmployeComponent,canActivate: [AuthorizationGuard], data: {role:"ADMIN"}},

    ]},
  {path: "home", component: HomeComponent},
  {path: "pause", component: PauseCalculatorComponent},
  {path: "edit-employe", component: EditEmployeComponent},
  {path: "commentaire", component: CommentairesComponent},
  {path: "heure", component: HeuresTravailleesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
