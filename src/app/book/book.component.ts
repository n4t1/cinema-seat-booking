import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const moviePlayId: number = +this.activatedRoute.snapshot.paramMap.get('moviePlayId');
    const selectedTimeId: number = +this.activatedRoute.snapshot.paramMap.get('selectedTimeId');
    const selectedTimeNumber: number = +this.activatedRoute.snapshot.paramMap.get('selectedTimeNumber');

    console.log(moviePlayId, selectedTimeId, selectedTimeNumber);
  }

}
