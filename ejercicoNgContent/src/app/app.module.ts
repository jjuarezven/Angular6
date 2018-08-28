import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { MessageComponent } from './message/message.component';
import { StudyDetailsComponent } from './study-details/study-details.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user-component/user.component';
import { UserService } from './services/user-service';


@NgModule({
  declarations: [
    AppComponent, ChildComponentComponent, MessageComponent, StudyDetailsComponent, UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent, StudyDetailsComponent, UserComponent]
})
export class AppModule { }
