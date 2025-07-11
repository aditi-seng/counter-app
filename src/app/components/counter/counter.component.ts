import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter = 0;

  @Output() actionTaken = new EventEmitter<string>();

  increment() {
    this.counter++;
    this.actionTaken.emit(`[+1] Counter is now ${this.counter}`);
  }

  decrement() {
    this.counter--;
    this.actionTaken.emit(`[-1] Counter is now ${this.counter}`);
  }

  reset() {
    this.counter = 0;
    this.actionTaken.emit(`[Reset] Counter is now ${this.counter}`);
  }

}
