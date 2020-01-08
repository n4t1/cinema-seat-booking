import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BetterScreenReadService {
  public static readonly DEFAULT_FONT_SIZE = 16;
  private fontSize: number;
  private defaultFontSize = {
    max: 20,
    min: BetterScreenReadService.DEFAULT_FONT_SIZE,
    direction: true
  };

  constructor() {
    this.fontSize = BetterScreenReadService.DEFAULT_FONT_SIZE;
  }

  public changeFontSize(): number {
    if (this.defaultFontSize.direction) {
      ++this.fontSize;
    } else {
      --this.fontSize;
    }

    if (this.fontSize === this.defaultFontSize.min) {
      this.defaultFontSize.direction = true;
    } else if (this.fontSize === this.defaultFontSize.max) {
      this.defaultFontSize.direction = false;
    }

    return this.fontSize;
  }
}
