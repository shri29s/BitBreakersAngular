import { Component } from '@angular/core';
import { startup } from '../models/startup';
import { StartupService } from '../service/startup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  startup: startup = {};
  startupService: StartupService;
  constructor(startupService: StartupService) {
    this.startupService = startupService;
  }

  onSubmit() {
    this.startupService.addStartup(this.startup)
      .subscribe({
        next: value => console.log(value),
        error: error => console.error("Not created"),
      });
  }
}
