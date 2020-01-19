import { Component, Input, OnInit } from '@angular/core';
import { ISeatsRows } from '@api/shared';

@Component({
  selector: 'app-hall-template',
  templateUrl: './hall-template.component.html',
  styleUrls: ['./hall-template.component.scss']
})
export class HallTemplateComponent implements OnInit {
  @Input() public rows: ISeatsRows[] = [];
  @Input() public hallId: number;

  constructor() { }

  ngOnInit() {
  }
}
