import { Component, OnInit } from '@angular/core';
import { StartupService } from '../service/startup.service';
import { startup } from '../models/startup';

@Component({
  selector: 'app-startupdisplay',
  templateUrl: './startupdisplay.component.html',
  styleUrl: './startupdisplay.component.scss'
})
export class StartupdisplayComponent implements OnInit {
  startupService: StartupService;
  constructor(startupService: StartupService) {
    this.startupService = startupService;
  }

  startups: startup[] = [];

  ngOnInit(): void {
    this.startupService.getAllStartup()
      .subscribe({
        next: value => this.startups = value,
        error: error => console.error(error),
      });
  }
}
