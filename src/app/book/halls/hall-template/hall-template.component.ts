import { Component, Input, OnInit } from '@angular/core';
import { ISeatsRows } from '@shared/models/halls/hallsREST.interface';

@Component({
  selector: 'app-hall-template',
  templateUrl: './hall-template.component.html',
  styleUrls: ['./hall-template.component.scss']
})
export class HallTemplateComponent implements OnInit {
  @Input() public rows: ISeatsRows[] = [];

  @Input() private set hallId(value: number) {
    this._hallId = value;
    this.hallName = `Sala ${this.hallId}`;
  }
  private get hallId(): number {
    return this._hallId;
  }
  private _hallId: number;
  public hallName: string;

  constructor() { }

  ngOnInit() {
  }

}
