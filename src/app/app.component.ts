import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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


  // Forms (TD) assignment

  @ViewChild('formData', {static:false}) assignmentForm: NgForm;

  defaultSubscription = 'advanced';

  // USER OBJECT which stores the submitted data
	user = {
	  email: '',
	  password: '',
	  subscription: ''
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.assignmentForm.value.email;
    this.user.password = this.assignmentForm.value.password;
    this.user.subscription = this.assignmentForm.value.subscription;

    console.log(this.assignmentForm.value);
  }

}
