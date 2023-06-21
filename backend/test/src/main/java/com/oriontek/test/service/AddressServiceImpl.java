package com.oriontek.test.service;


import com.oriontek.test.model.Address;
import com.oriontek.test.repository.AddressRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AddressServiceImpl implements AddressService{

   private AddressRepository addressRepository;




    @Override
    public Address update(Address address) {

        Address addressFound = this.addressRepository.findById(address.getId()).get();




        addressFound.setClient(addressFound.getClient());
        addressFound.setRoad(address.getRoad());
        addressFound.setZipCode(address.getRoad());
        addressFound.setCity(address.getCity());


        return this.addressRepository.save(addressFound);


    }

    @Override
    public Address findById(long id) {
        return this.addressRepository.findById(id).get();
    }
}
