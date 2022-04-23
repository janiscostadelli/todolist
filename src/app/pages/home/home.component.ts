import { Component, Input, OnInit } from '@angular/core'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() isLate: boolean = false;
  @Input() isToday: boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
