import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css'],
})
export class Comp5Component implements OnInit {
  count: number = 1;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
