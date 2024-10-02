import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupdisplayComponent } from './startupdisplay/startupdisplay.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'admin', component: HomeComponent },
  { path: 'startups', component: StartupdisplayComponent },
  { path: '', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
