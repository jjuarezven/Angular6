import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // eventos que son escuchados en el componente padre (app.component.html <app-cockpit (serverCreated)="onServerAdded($event);" (bluePrintCreated)="onBlueprintAdded($event);"></app-cockpit>)
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

/* usando 2-way binding
  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
*/

 /* usando local reference
    onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }
*/
// usando @ViewChild con serverContentInput
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

}
