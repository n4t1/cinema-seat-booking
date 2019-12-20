import { Component, Input, OnInit } from '@angular/core';
import { HallsService } from '@shared/services/halls/halls.service';
import { SeatsRowsDTO } from '@shared/models/halls/hallsDTO';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.scss']
})
export class HallsComponent implements OnInit {

  @Input() public set hallId(value: number) {
    this._hallId = value;

    this.getHallDetails();
  }
  public get hallId(): number {
    return this._hallId;
  }
  public _hallId: number;
  public rows: SeatsRowsDTO[];

  constructor(
    private  hallsService: HallsService
  ) { }

  ngOnInit() {
  }

  private getHallDetails() {
    this.hallsService.getHall(this.hallId).subscribe(hall => {
      this.rows = hall.rows;
    });
  }

}
