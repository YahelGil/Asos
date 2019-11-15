import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsCalculatorService {
  private previousWord: string;

  constructor() {
  }

  calculateDiff(currentWord: string): number {
    let diff = 0;
    if (!!this.previousWord) {
      diff = 5;
    }
    this.previousWord = currentWord;
    return diff;
  }


  getColor(points: number): string {
    return 'blue';
  }
}
