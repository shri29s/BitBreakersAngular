import { Component } from '@angular/core';
import { StartupService } from '../service/startup.service';

@Component({
  selector: 'app-startupdisplay',
  templateUrl: './startupdisplay.component.html',
  styleUrl: './startupdisplay.component.scss'
})
export class StartupdisplayComponent {
  startupService: StartupService;
  constructor(startupService: StartupService) {
    this.startupService = startupService;
  }
}
