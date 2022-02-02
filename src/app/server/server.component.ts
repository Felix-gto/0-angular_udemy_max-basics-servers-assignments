import { Component } from '@angular/core'; // Import the Component from the core package

@Component({                                // @Component Decorator (@ in front)
selector: 'app-server',                     // selector = the html "tag" with which we use the component -> Name it: app-<name>
templateUrl: './server.component.html',      // reference the external html file of the component adding it's relative path
styles: [`
    .online {
        color: white;
        }
    `]
})

export class ServerComponent {               // Export the component: -> Name it: <Name of the Component> + <Component>
    serverID: number = 10;                   // Define the serverID property, declare as number using TypeSCript
    serverStatus: string = 'offline';        // Define the serverStatus property, declare as string

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {                       // Define the getServerStatus method, return the serverStatus property defined above
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}