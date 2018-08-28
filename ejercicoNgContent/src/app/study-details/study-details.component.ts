import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-study-details',
  templateUrl: './study-details.component.html',
  styleUrls: ['./study-details.component.css']
})
export class StudyDetailsComponent implements OnInit {
  @Input() mensajeExterno2: string;

  constructor() { }

  ngOnInit() {
  }

}
