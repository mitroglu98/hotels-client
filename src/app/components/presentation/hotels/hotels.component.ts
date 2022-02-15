import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  showDiv:boolean = true;
  hotels: any = [
    {hid: 1, name: 'Princess', year: 2013},
    {hid: 2, name: 'Sea fort', year: 2016},
    {hid: 3, name: 'Korali', year: 1988},
    {hid: 4, name: 'Sidro', year: 2019},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
