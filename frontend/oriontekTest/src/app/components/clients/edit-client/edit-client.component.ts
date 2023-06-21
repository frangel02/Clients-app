import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { Address } from 'src/app/model/address';
import { Client } from 'src/app/model/client';
import { AddressService } from 'src/app/services/address.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private clientService: ClientService,
    private addressService: AddressService) { 

      this.client = new Client();


    }

  client: Client = {};
  param :any;

  address: Address[] = [];

  ngOnInit() {

    this.idFromUrl();
      
  }




  save(client: Client){

    if(client.id == null){

      console.log(client)

      this.address.forEach(element => {
        this.client.address?.push(element)
      });
      
      this.clientService.save(client).subscribe(result => this.gotoClientList());
    

    }else if(client.id != null && Number(client.id) > 0){

      this.clientService.update(client).subscribe(result => this.gotoClientList());

    }
    

  }


  getDetailClient(id:number) {

   this.clientService.getDetailsClient(id).subscribe(value => {

    this.client.id = value.id,
    this.client.name = value.name,
    this.client.email = value.email,
    this.client.phone = value.phone,
    //this.address = value.address

    value.address?.forEach(element => {
      this.address.push(element)
    });

   });

   
  }
  

  addNewAddress(){

    this.address.push(new Address)
  }


  gotoClientList() {
    this.router.navigate(['/clients']);
   }



    idFromUrl() {

        
     this.route.paramMap.subscribe((params) => {
      console.log(params);
      this.param = params.get('id');
      
      
    });

    

    if(this.param > 0){

      this.getDetailClient(this.param)
     
    }

    console.log(this.param)

}



onUpdateAddress(address: Address){
  this.addressService.update(address).subscribe();
  console.log(address);
}

}
