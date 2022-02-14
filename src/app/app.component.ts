import { Component } from '@angular/core';

import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  // Data Binding using ngModel - See Databinding assignment
  username = "";
  log = [];
  

  // Directives assignment - ngIf -> If true displays Paragraph
  showSecret = false;

  // Button click event -> toggles display of Paragraph
  onToggleDetails() {
    this.showSecret = !this.showSecret;

    // this.log.push(this.log.length + 1);

    this.log.push(new Date());  //Timestamp instead of number (version to display incremented number commented out above)
  }

  
  // Components and data binding deep dive: Property & Event binding and View encapsulation
  oddNumbers: number[] =[];
  evenNumbers: number[] =[];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }

  }

}
