//import './rxjs-operators';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing.component';
import { NavigationComponent } from './navigation.component';
import { NotFoundComponent } from './pages/not-found.component';
import { PanelModule } from './panel/panel.module';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home/welcome.component';
import { WikipediaSearchModule } from './wikipedia-search/wikipedia-search.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    NotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    PanelModule,
    TodoModule,
    ProductModule,
    WikipediaSearchModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
