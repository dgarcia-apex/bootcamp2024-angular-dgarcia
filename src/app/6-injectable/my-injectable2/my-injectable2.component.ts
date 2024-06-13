import { Component } from '@angular/core';
import { Injectable2Service } from '../injectable2.service';

@Component({
  selector: 'app-my-injectable2',
  templateUrl: './my-injectable2.component.html',
  styleUrl: './my-injectable2.component.scss',
})
export class MyInjectable2Component {
  myComponentComment: string = '';
  constructor(private service2: Injectable2Service) {}

  ngOnInit() {
    this.myComponentComment = this.service2.getPersistentData();
  }
}
