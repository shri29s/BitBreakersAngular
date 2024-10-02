import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupdisplayComponent } from './startupdisplay/startupdisplay.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'admin', component: HomeComponent },
  { path: 'startups', component: StartupdisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
