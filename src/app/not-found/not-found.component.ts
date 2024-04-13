import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  title: string = 'Oops! Page Not Found';
  description: string = 'Sorry, the requested page could not be found.';
  imageUrl: string = 'assets/images/404-error.png';
}
