import { Component } from "@angular/core";

/* 
* green comments
? boolean comment
*/

@Component({
    selector: 'app-server', 
    // selector: '[app-server]',  with using element
    // selector:'.app-server', using class selector
    templateUrl: './server.component.html',
    // template: `
    // <h3 style="color:red">
    // Hey this is from the template 
    // </h3>`,
    // styleUrls:['./server.component.css']
    styles:[` 
    h3{
        color:blue
    }`,
    `
    h3{
        background-color:yellow
    }`
    ]
})
export class ServerComponent{

    serverId: number = 10;
    serverStatus: string = 'offline';
    allowNewServer = false;

    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true;
        },2000);
    }
    getServerStatus(){
        return this.serverStatus;
    }

}