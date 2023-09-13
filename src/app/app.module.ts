import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from "ngx-pagination";
import { AppComponent } from './app.component';
import { EmployesComponent } from './employes/employes.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewEmployeComponent } from './new-employe/new-employe.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { EditPointageComponent } from './edit-pointage/edit-pointage.component';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { CalendarComponent } from './calendar/calendar.component';
import {PointageComponent} from "./pointages/pointages.component";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {ToastrModule} from "ngx-toastr";
import {MaterialModule} from "../material.module";
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { PauseCalculatorComponent } from './pause-calculator/pause-calculator.component';
import { HeuresTravailleesComponent } from './heures-travaillees/heures-travaillees.component';






@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    HomeComponent,
    NavbarComponent,
    PointageComponent,
    NewEmployeComponent,
    EditEmployeComponent,
    EditPointageComponent,

    CalendarComponent,
     LoginComponent,
     AdminTemplateComponent,
     NotAuthorizedComponent,
     CommentairesComponent,
     PauseCalculatorComponent,
     HeuresTravailleesComponent,







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    NgxPaginationModule,
    ReactiveFormsModule,

    RouterOutlet
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : AppHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
