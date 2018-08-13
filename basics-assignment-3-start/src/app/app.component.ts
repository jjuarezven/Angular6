import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .whiteColor{
      color: white;
    }
  `]
})
export class AppComponent {
  clickArray = [];
  showDetail = false;

  onClick(event: any) {
    this.showDetail = !this.showDetail;
    this.clickArray.push({timeStamp: event.timeStamp, style: this.clickArray.length > 5});
  }
}
