import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  month: string = '';
  weekdays: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  calendar: any[] = [];
  currentDay: number = new Date().getDate();

  constructor() { }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    this.month = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < new Date(currentYear, currentMonth, 1).getDay()) {
          week.push(null);
        } else if (dayCount <= daysInMonth) {
          week.push(dayCount);
          dayCount++;
        }
      }
      this.calendar.push(week);
    }
  }
}
