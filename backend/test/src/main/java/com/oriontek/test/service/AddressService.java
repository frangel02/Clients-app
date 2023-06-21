package com.oriontek.test.service;

import com.oriontek.test.model.Address;

public interface AddressService {


    Address update(Address address);
    Address findById(long id);
}
