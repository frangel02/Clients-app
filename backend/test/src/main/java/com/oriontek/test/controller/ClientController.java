package com.oriontek.test.controller;

import com.oriontek.test.model.Client;
import com.oriontek.test.service.ClientServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ClientController {


    private ClientServiceImpl clientService;

    public ClientController(ClientServiceImpl clientService) {
        this.clientService = clientService;
    }


    @GetMapping("/clients")
    public List<Client> getClients() {
        return clientService.getAllClients();
    }


    @GetMapping("client/{id}")
    public Client getClientDetails(@PathVariable(name = "id") Long id){
       return this.clientService.findById(id);
    }


    @PostMapping("/client/new")
    public void addUser(@RequestBody Client client){
        this.clientService.save(client);
    }

    @PutMapping("/client/update")
    public void updateUser(@RequestBody Client client){
        this.clientService.update(client);
    }
}
