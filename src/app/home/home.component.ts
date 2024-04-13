import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // or styleUrls: ['./home.component.scss'] if using SCSS
})
export class HomeComponent implements OnInit {

  title: string = 'Welcome To Our Simple Conversion Website';
  description: string = 'We are so glad for your visit. Please feel free to use the converter.';
  imageUrl: string = 'assets/images/home-image.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
