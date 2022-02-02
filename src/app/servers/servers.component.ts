import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  // Property Binding - Button enabled/disabled
  allowNewServer = false;

  // String Interpolation - Paragraph
  serverCreationStatus = 'No server was created!';
  serverName = "Testserver";

  // ngIF Directive - Paragraph
  serverCreated = false;

  servers = ['Testserver', 'Testserver 2'];

  // Use setTimeout (normal JavaScript function) to set allowNewServer defined above (export class) to true, after 2 seconds  ->  Enables button after 2 seconds ([disabled]="!allowNewServer") -> disabled = false after 2 secs.
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  // Create the method which will be added as an event -> executed when the event occurs ((click) event added to the button)
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  // We can console log the data from the input, get the input value (what the user enters) etc.
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

}
