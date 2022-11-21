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
    }`,
    `
    .online{
        color: white;
    }`
    
    ]
})
export class ServerComponent{

    serverId: number = 10;
    serverStatus: string = 'offline';
    allowNewServer = false;
    serverCreation = 'No server was created.';
    serverName = 'Test server';
    username='';

    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true;
        },2000);

        this.serverStatus = Math.random()> 0.5 ? 'online': 'offline';

    }
    getServerStatus(){
        return this.serverStatus;
    }

    onCreateServer(){
        this.serverCreation = 'Server was created '+ this.serverName;
    }
    onUpdateServer(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    resetUser(){
        this.username='';
    }

    getColor(){
        return this.serverStatus === 'online'? 'green': 'red';
    }
}