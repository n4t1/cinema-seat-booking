import { Component, Input, OnInit } from '@angular/core';
import { HallsService, SeatsRowsDTO } from '@api/shared';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.scss']
})
export class HallsComponent implements OnInit {

  @Input() public set roomId(value: number) {
    this._roomId = value;

    this.getHallDetails();
  }
  public get roomId(): number {
    return this._roomId;
  }
  public _roomId: number;
  public rows: SeatsRowsDTO[];

  constructor(
    private  hallsService: HallsService
  ) { }

  ngOnInit() {
  }

  private getHallDetails() {
    this.hallsService.getHall(this.roomId).subscribe(hall => {
      this.rows = hall.rows;
    });
  }

}
