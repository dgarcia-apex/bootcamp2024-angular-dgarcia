import { Component } from '@angular/core';
import { Injectable1Service } from '../injectable1.service';

@Component({
  selector: 'app-my-injectable',
  templateUrl: './my-injectable.component.html',
  styleUrl: './my-injectable.component.scss',
})
export class MyInjectableComponent {
  title: string = '';
  constructor(private service1: Injectable1Service) {}

  ngOnInit() {
    this.title = this.service1.getMyComment();
  }
}
