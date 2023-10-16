import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailListComponent } from './student-detail-list/student-detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
