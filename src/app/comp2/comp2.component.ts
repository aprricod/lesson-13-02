import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  fontSize: string = '13px';
  fontFamily: string = 'Verdana, Geneva, Tahoma, sans-serif';
  fontStyle: string = 'italic';

  verdanaFontStyle: object = {
    'font-size': this.fontSize,
    'font-family': this.fontFamily,
    'font-style': 'italic',
  };

  constructor() {}

  ngOnInit(): void {}
}
