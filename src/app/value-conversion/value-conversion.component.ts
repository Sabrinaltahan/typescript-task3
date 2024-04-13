import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-value-conversion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './value-conversion.component.html',
  styleUrls: ['./value-conversion.component.css'] // or styleUrls: ['./value-conversion.component.scss'] if using SCSS
})
export class ValueConversionComponent implements OnInit {

  meters: number = 0;
  celsius: number = 0;
  feet: number = 0;
  fahrenheit: number = 0;

  constructor() { }

  ngOnInit(): void {
  }



  convertMetersToFeet() {
    this.feet = this.meters * 3.28084; // 1 meter = 3.28084 feet
  }

  convertCelsiusToFahrenheit() {
    this.fahrenheit = (this.celsius * 9/5) + 32; // Celsius to Fahrenheit formula
  }

}
