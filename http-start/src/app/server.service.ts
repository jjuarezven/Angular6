import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {
  constructor(private http: Http) {

  }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    /* return this.http.post('https://practica-http.firebaseio.com/data.json', servers, {headers: headers}); */
    // actualizar datos
    return this.http.put('https://practica-http.firebaseio.com/data.json', servers, {headers: headers});
  }

  getServers() {
    // cambiamos la transformacion al servicio en lugar de hacerla en cada sitio donde se invoque el metodo
    return this.http.get('https://practica-http.firebaseio.com/data.json')
    .map((response: Response) => {
      return response.json();
    });
  }

}
