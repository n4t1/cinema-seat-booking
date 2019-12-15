import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CalendarService } from '../../_shared/services/calendar/calendar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-day-template',
  templateUrl: './day-template.component.html',
  styleUrls: ['./day-template.component.scss']
})
export class DayTemplateComponent implements OnInit, OnDestroy {
  @Input() public date: Date;
  public disabledSelectedDate = false;

  private sub: Subscription = new Subscription();

  constructor(
    private calendarService: CalendarService
  ) {
  }

  ngOnInit() {
    this.disabledButtonForSelectedDate();
  }

  public showRepertuar() {
    this.calendarService.setSelectedDate = this.date;
  }

  private disabledButtonForSelectedDate() {
    this.sub.add(this.calendarService.getSelectedDate.subscribe(date => {
      if (date.valueOf() === this.date.valueOf()) {
        this.disabledSelectedDate = true;
      } else if (this.disabledSelectedDate) {
        this.disabledSelectedDate = false;
      }
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
