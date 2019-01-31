import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// tenemos acceso al formulario
@ViewChild('thisForm')
myForm: NgForm;

subscriptions : string[]  = ['Basic', 'Advanced', 'Pro'];
selectedSubscription = this.subscriptions[1];
password : string  = '';

  onSubmit() {
    console.log(this.myForm.value);
  }
}
