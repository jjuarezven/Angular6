import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { MessageComponent } from './message/message.component';
import { StudyDetailsComponent } from './study-details/study-details.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponentComponent, MessageComponent, StudyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent, StudyDetailsComponent]
})
export class AppModule { }
