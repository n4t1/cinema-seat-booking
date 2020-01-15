import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BetterScreenReadService {
  private fontSize: number;
  private defaultFontSize = {
    max: 4, // the same as variables.scss $defaultFontSize-max
    min: 0, // the same as variables.scss $defaultFontSize-min
    direction: true
  };

  constructor() {
    this.fontSize = this.defaultFontSize.min;
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
