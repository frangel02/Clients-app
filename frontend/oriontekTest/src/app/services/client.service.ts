import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {


  private clientUrl: string;


  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/';
  }
 
  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl +"clients");
  }
 
  public save(client: Client) {
    return this.http.post<Client>(this.clientUrl + "client/new", client);
  }

  public update(client:Client){
    return this.http.put<Client>(this.clientUrl + "client/update",client);
  }


  public getDetailsClient(id:number ){
    return this.http.get<Client>(this.clientUrl +`client/${id}`);
  }


}
