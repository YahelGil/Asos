import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PointsComponent} from './components/points/points.component';
import {PointsCalculatorService} from './services/points-calculator.service';
import {WordInputComponent} from './components/word-input/word-input.component';
import {MatFormField, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListInputsComponent } from './components/list-inputs/list-inputs.component';

@NgModule({
  imports: [
    CommonModule, MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PointsCalculatorService],
  exports: [ListInputsComponent],
  declarations: [PointsComponent, WordInputComponent, ListInputsComponent]
})
export class UserInputsModule {
}
