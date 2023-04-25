import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  // Task 1 : Add Information
  dataInfo:any[] = []

  name = ""; 
  email = ""; 
  city = "";

  cities = ["Kolhapur","Pune","Sangli","satara","Mumbai"];

  nameD(event:Event){
    let ctrl = <HTMLInputElement>event.target;
    this.name = ctrl.value;
  }
  emailD(event:Event){
    let ctrl = <HTMLInputElement>event.target;
    this.email = ctrl.value;

  }
  cityD(event:Event){
    let ctrl = <HTMLSelectElement>event.target;
    this.city = ctrl.value;

  }
  
  btnSub(){
    
   
    let adddataInfo = {
     
     Uname: this.name,
     Uemail: this.email,
     Ucity: this.city
   };

   this.dataInfo.push(adddataInfo);
   console.log(this.dataInfo);

   this.name = "";
   this.email = "";
   this.city = "";
   

  }
 
  
}
