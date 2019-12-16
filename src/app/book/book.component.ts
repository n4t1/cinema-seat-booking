import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public moviePlayId: number;
  public selectedTimeId: number;
  public selectedTime: Date;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getParamMap();
  }

  private getParamMap() {
    this.moviePlayId = +this.activatedRoute.snapshot.paramMap.get('moviePlayId');
    this.selectedTimeId = +this.activatedRoute.snapshot.paramMap.get('selectedTimeId');
    const selectedTimeNumber: number = +this.activatedRoute.snapshot.paramMap.get('selectedTimeNumber');
    this.selectedTime = new Date(selectedTimeNumber);
  }
}
