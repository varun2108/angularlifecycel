import { Dataserviece } from './../servieces/data.serveiece';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {
  mytitle:String;
  constructor(private _dataserviece:Dataserviece) { }

  ngOnInit() {
    this.mytitle=this._dataserviece.title;
  }

}
