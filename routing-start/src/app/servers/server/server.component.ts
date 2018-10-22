import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // signo + para que sea tratado como un numero en lugar de string
    this.server = this.serversService.getServer(
      +this.route.snapshot.params["id"]
    );
    this.route.params.subscribe(
      (params: Params) =>
        (this.server = this.serversService.getServer(+params["id"]))
    );
  }
}
