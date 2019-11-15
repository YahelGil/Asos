import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WordAssosiation} from '../types/wordAssosiation';

@Component({
  selector: 'app-list-inputs',
  templateUrl: './list-inputs.component.html',
  styleUrls: ['./list-inputs.component.css']
})
export class ListInputsComponent implements OnInit, OnChanges {
  private wordAssosiations: WordAssosiation[];

  constructor() {
  }

  ngOnInit() {
    this.wordAssosiations = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  addToList($event: string) {
    this.wordAssosiations.push({word: $event, points: 3});
  }
}
