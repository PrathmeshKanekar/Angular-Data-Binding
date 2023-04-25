import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  quaters = ["Quater 1","Quater 2","Quater 3","Quater 4"]
  months = ["Apr","May","Jun"]

  selectquater = "Quater 1"
  selectmonth = "Apr"



  quaterchange(){
    if( this.selectquater == "Quater 1"){
      this.months = ["Apr","May","Jun"]
      this.selectmonth = "Apr"
    }
    else if( this.selectquater == "Quater 2"){
      this.months = ["Jul","Aug","Sep"]
      this.selectmonth = "Jul"
    }
    else if( this.selectquater == "Quater 3"){
      this.months = ["Oct","Nov","Dec"]
      this.selectmonth = "Oct"
    }
    else{
      this.months = ["Jan","Feb","Mar"]
      this.selectmonth = "Jan"
    }
  }

  country = "India";

  array:any[]=[];
  selectname="";
  selectemail="";
  selectcity="";

  onsub(){
    let a = this.selectname + "-" + this.selectemail + "-" + this.selectcity
    this.array.push(a)
    this.selectname = "";
    this.selectemail = "";
    this.selectcity = "";
    console.log(this.array);

  }


}
