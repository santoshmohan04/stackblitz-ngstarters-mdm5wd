import { Component, OnInit } from '@angular/core';
import { quotescollection } from './quotes.data';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css',
})
export class QuotesComponent implements OnInit {
  quotes = quotescollection

  displayquote: any;

  ngOnInit() {
    this.generateQuote();
  }

  generateQuote() {
    let random = Math.floor(Math.random() * this.quotes.length);
    this.displayquote = this.quotes[random];
  }
}
