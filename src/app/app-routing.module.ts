import { NgModule } from '@angular/core';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found.component';
import { LandingComponent } from './pages/landing.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: LandingComponent, data: {title: 'Angular sandbox demo page'}},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent, data: {title: 'Page not found'}}
    ], {
    })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
