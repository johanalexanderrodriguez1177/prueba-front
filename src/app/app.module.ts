import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddNoticesComponent } from './components/add-notices/add-notices.component';
import { NoticesListComponent } from './components/notices-list/notices-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { NoticesService } from '../app/services/notices.service';

@NgModule({
  declarations: [
    AppComponent,
    AddNoticesComponent,
    NoticesListComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    NoticesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
