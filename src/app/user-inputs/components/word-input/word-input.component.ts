import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css']
})
export class WordInputComponent implements OnInit {
  currentWord: string;
  @Input() wordAssociation: [string, number];
  @Output() assosiationToAdd: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleInput() {
    this.assosiationToAdd.emit(this.currentWord);
    this.currentWord = '';
  }
}
