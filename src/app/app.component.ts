import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  historyList: string[] = [];

  handleAction(message: string) {
    this.historyList.unshift(message); // latest on top
  }

  clearAllHistory = () => {
    this.historyList = [];
  };
}
