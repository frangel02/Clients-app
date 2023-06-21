import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from '../model/address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {


  private clientUrl: string;


  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/';
  }
 


public update(address:Address){
  return this.http.patch<Address>(this.clientUrl + "address/update",address);
}

}
