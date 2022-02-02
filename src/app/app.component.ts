import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
