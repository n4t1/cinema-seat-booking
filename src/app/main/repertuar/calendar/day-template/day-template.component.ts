import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-template',
  templateUrl: './day-template.component.html',
  styleUrls: ['./day-template.component.scss']
})
export class DayTemplateComponent implements OnInit {
  @Input() date: string;

  constructor() {
  }

  ngOnInit() {
  }
}
