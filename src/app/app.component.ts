import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {UserService} from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banner-pro';
  message = 'this is release note'
  users: any
  // notes = 'This is release notes for the particular date.';

  constructor(private user: UserService){
    this.user.getData().subscribe(data =>{
      console.log(data);
      this.users = data;
    })
  }

  simpleAlert(){
    Swal.fire(this.message)
  }

  successAlert(){
    Swal.fire("Thank you", "Submitted successfully", 'success');
  }

  confirmAlert(){
    Swal.fire({
      title:'Do you want to remove?',
      text:'You will not able to recover this file',
      icon:'warning',
      showCancelButton: true,
      confirmButtonText:'Yes delete it',
      cancelButtonText:'No keep it'
    }).then((result)=>{
      if(result.value){
        Swal.fire("Deleted", 'Your file has been deleted.', 'success')
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire('Cancelled.', 'Your files are safe.', 'error')
      }
    })
  }
}
