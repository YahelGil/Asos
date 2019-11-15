import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {PointsCalculatorService} from '../../services/points-calculator.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointsComponent implements OnInit, OnChanges {
  @Input() points: number;
  color: string;

  constructor(private pointsCalculatorService: PointsCalculatorService) {
  }

  ngOnInit() {
    this.updatePoints();
  }

  ngOnChanges() {
    this.updatePoints();
  }

  updatePoints(): void {
    this.color = this.pointsCalculatorService.getColor(this.points);
  }
}
