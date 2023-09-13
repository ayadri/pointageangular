import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PauseService} from "../services/pause.service";

@Component({
  selector: 'app-pause-calculator',
  templateUrl: './pause-calculator.component.html',
  styleUrls: ['./pause-calculator.component.css']
})
export class PauseCalculatorComponent {
  statusPointages: string[] = [];
  dureePause: string = "";

  constructor(private http: HttpClient, private pauseService: PauseService) { }

  calculerDureePause() {
    this.pauseService.calculerDureePause(this.statusPointages)
      .subscribe(result => {
        this.dureePause = result;
      });
  }
}
