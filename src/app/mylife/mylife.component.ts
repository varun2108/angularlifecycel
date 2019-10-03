import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylife',
  templateUrl: './mylife.component.html',
  styleUrls: ['./mylife.component.css']
})
export class MylifeComponent implements OnInit {
  data:number =100;
  constructor() {
    console.log("constructor invoked");
    console.log("data is "+(this.data));
  }
   ngOnChanes(){
    console.log("onchanges invoked");
    console.log("on changedata is "+(this.data));
   }
  ngOnInit() {
    console.log("on init invoked");
    console.log("on initdata is "+this.data);
  }
  ngAfterContentInit(){
    console.log("after content inti invoked");
  }
  ngAfterContentChecked(){
    console.log("aftercontent Checked invoked");
  }
  ngAfterViewInit(){
    console.log("afterview init invoked");
  }
  ngAfterViewChecked(){
    console.log("after view checked invoked");
  }
  addnumber(){
    this.data+=100;
  }
  subnumber(){
    this.data-= 100;
  }
}
