import { Component, OnInit, Renderer2 } from '@angular/core';
import { BetterScreenReadService } from '../../services/index';

@Component({
  selector: 'app-cinema-name',
  templateUrl: './cinema-name.component.html',
  styleUrls: ['./cinema-name.component.scss']
})
export class CinemaNameComponent implements OnInit {
  public insertColor = true;

  constructor(
    private renderer2: Renderer2,
    private betterScreenReadService: BetterScreenReadService
  ) {}

  ngOnInit() {
  }

  public changeFontSize() {
    const fontSize = this.betterScreenReadService.changeFontSize();
    this.renderer2.setStyle(document.body, 'font-size', `${fontSize}px`);
  }
}
