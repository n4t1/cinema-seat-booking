import { Component, OnInit, Renderer2 } from '@angular/core';
import { BetterScreenReadService } from '../../services/index';

@Component({
  selector: 'app-cinema-name',
  templateUrl: './cinema-name.component.html',
  styleUrls: ['./cinema-name.component.scss']
})
export class CinemaNameComponent implements OnInit {
  public invert = false;

  private readonly htmlElementRef: HTMLElement;
  private fontSizeCounter = 0;

  constructor(
    private renderer2: Renderer2,
    private betterScreenReadService: BetterScreenReadService
  ) {
    this.htmlElementRef = document.getElementById('html');
  }

  ngOnInit() {
  }

  public changeFontSize() {
    this.renderer2.removeClass(this.htmlElementRef, `change-font-size-${this.fontSizeCounter}`);
    this.fontSizeCounter = this.betterScreenReadService.changeFontSize();
    this.renderer2.addClass(this.htmlElementRef, `change-font-size-${this.fontSizeCounter}`);
  }

  public invertColors() {
    this.invert = !this.invert;

    if (this.invert) {
      this.renderer2.addClass(this.htmlElementRef, 'invert-colors');
    } else {
      this.renderer2.removeClass(this.htmlElementRef, 'invert-colors');
    }
  }
}
