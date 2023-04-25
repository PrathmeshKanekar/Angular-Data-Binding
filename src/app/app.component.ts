import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_Binding';

  // Assignment No.2
  name = "iGAP";
  txtChange(event:Event){
    let ctrl = <HTMLInputElement>event.target;
    this.name = ctrl.value;
  }
  // <><><><><><><><><><><><><><>

  

}
