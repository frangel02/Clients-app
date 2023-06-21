package com.oriontek.test.service;

import com.oriontek.test.model.Address;
import com.oriontek.test.model.Client;
import com.oriontek.test.repository.AddressRepository;
import com.oriontek.test.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements ClientService {


    private ClientRepository clientRepository;

    private AddressRepository addressRepository;

    public ClientServiceImpl(ClientRepository clientRepository, AddressRepository addressRepository) {
        this.clientRepository = clientRepository;
        this.addressRepository = addressRepository;
    }

    @Override
    public List<Client> getAllClients() {

        List<Client> clients ;
       return  clients = (List<Client>) this.clientRepository.findAll();
    }

    @Override
    public Client save(Client client) {


        Client clientSaved = this.clientRepository.save(client);

        Address address = new Address();

        List<Address> addressList = new ArrayList<>();

        for(Address addressItem: client.getAddress()){
            address.setRoad(addressItem.getRoad());
            address.setCity(addressItem.getCity());
            address.setZipCode(addressItem.getZipCode());
            address.setClient(clientSaved);
            addressList.add(address);
        }

        this.addressRepository.saveAll(addressList);

        return clientSaved;
    }


    @Override
    public Client update(Client client){

        Optional<Client> clientFound  = this.clientRepository.findById(client.getId());
        clientFound.ifPresent(e -> {

            this.clientRepository.save(client);
        });

        return clientFound.orElse(new Client());
    }

    @Override
    public void delete(Client client) {
        this.clientRepository.delete(client);
    }

    @Override
    public Client findById(Long id) {

        Optional<Client> clientFound = this.clientRepository.findById(id);

        return clientFound.orElse(new Client()) ;
    }
}
