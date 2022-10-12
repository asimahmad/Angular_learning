import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    // templateUrl: './server.component.html',
    template: `
    <h3 style="color:red">
    Hey this is from the template 
    </h3>`,
    // styleUrls:['./server.component.css']
    styles:[` 
    h3{
        color:blue
    }
    `]
})
export class ServerComponent{

}