import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponentComponent, MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent]
})
export class AppModule { }
