import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor() { }
  date: any = new Date();

  ngOnInit(): void {
  }

}
