import { Dataserviece } from './../servieces/data.serveiece';
import { Component, OnInit } from '@angular/core';
import { SampleService } from '../servieces/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  mytitle:string;
  welcome:string;
  constructor(private _dataserviece:Dataserviece, private _sampleserviece:SampleService) { }

  ngOnInit() {
    this.mytitle=this._dataserviece.title;
    this.welcome=this._sampleserviece.welcome;
  }

}
