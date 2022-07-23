import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Currency Converter"

  currency = [
    {
      "name": "USD",
      "buy": "36.5686"
      },
      {
      "name": "EUR",
      "buy": "37.2177",
      },
      {
      "name": "UAH",
      "buy": "1",
      }
  ]

 
}