import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  welcome:string;
  constructor() {
    this.welcome="welcome to the sample service";
   }
}
