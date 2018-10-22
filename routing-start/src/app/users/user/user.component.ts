import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}
/*
The snapshot is fine to use if there isn't any need to observe any changes to the activate route.
If the route is going to change and we need to capture that and react to it, then the reactive approach is the correct method.
*/
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }
}
