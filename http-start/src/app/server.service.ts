import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

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
    return this.http.get('https://practica-http.firebaseio.com/data.json');
  }

}