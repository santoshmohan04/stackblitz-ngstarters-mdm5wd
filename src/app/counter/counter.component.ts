import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  total: number = 0;
  constructor() {}
  ngOnInit() {
    this.add();
  }
  add() {
    this.total = this.total + 1;
  }
}
