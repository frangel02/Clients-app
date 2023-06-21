package com.oriontek.test.service;

import com.oriontek.test.model.Client;

import java.util.List;


public interface ClientService {



     List<Client> getAllClients();
     Client save(Client client);
     Client update(Client client);
     void delete(Client client);
     Client findById(Long id);

}
