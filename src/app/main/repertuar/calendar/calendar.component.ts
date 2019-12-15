import { Component, OnInit } from '@angular/core';
import { CalendarDTO } from '@shared/models/repertuar/repertuarDTO';
import { RepertuarService } from '@shared/services/repertuar/repertuar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public calendar: Date[];

  constructor(
    private repertuarService: RepertuarService
  ) {
  }

  ngOnInit() {
    this.initCalendar();
  }

  private initCalendar() {
    this.repertuarService.calendar.subscribe(calendar => {
      const from: Date = new Date(calendar.from);
      const to: Date = new Date(calendar.to);
      const newCalendar: Date[] = [];

      newCalendar.push(new Date(from));
      let isSetDate = true;
      while (isSetDate) {
        const newDate: Date = new Date(from.setDate(from.getDate() + 1));
        newCalendar.push(newDate);
        if (newDate.valueOf() === to.valueOf()) {
          isSetDate = false;
        }
      }

      this.calendar = newCalendar;
    });
  }
}
