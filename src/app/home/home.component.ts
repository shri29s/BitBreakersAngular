import { Component } from '@angular/core';
import { startup } from '../models/startup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  startup: startup = {};

  onSubmit() {
  }
}
