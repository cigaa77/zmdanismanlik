import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-belgelerimiz',
  templateUrl: './belgelerimiz.component.html',
  styleUrls: ['./belgelerimiz.component.css']
})
export class BelgelerimizComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickImage(x: number) {
    switch (x) {
      case 1:
        {
          alert("1 numara");
          break;
        } case 2:
        {
          alert("2 numara");
          break;
        } case 3:
        {
          alert("3 numara");
          break;
        }
    }
  }

}
