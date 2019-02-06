import { Component, OnInit } from "@angular/core";
import { ServerService } from "./server.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private serverService: ServerService) {}
  servers = [];

  ngOnInit() {
    this.onGet();
    if (this.servers.length === 0) {
      this.servers = [
        {
          name: "Testserver",
          capacity: 10,
          id: this.generateId()
        },
        {
          name: "Liveserver",
          capacity: 100,
          id: this.generateId()
        }
      ];
    }
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSave() {
    this.serverService
      .storeServers(this.servers)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      // cambiamos la transformacion al servicio en lugar de hacerla en cada sitio donde se invoque el metodo
      /* (response : Response) => {
          const data = response.json();
          console.log(data);
        }, */
      (servers: any) => {
        this.servers = servers;
      },
      error => console.log(error)
    );
  }
}
