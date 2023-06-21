import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private clientService: ClientService
  ) { }

  clients?: Client[] ;


  ngOnInit() {

    this.clientService.findAll().subscribe(data =>{
      this.clients = data;
      console.log(data);
      });
  }



  edit(client: Client){
    console.log(client)
    this.router.navigate([`/addClient/${client.id}`]);
  } 

}
