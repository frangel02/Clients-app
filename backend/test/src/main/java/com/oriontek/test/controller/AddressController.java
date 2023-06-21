package com.oriontek.test.controller;


import com.oriontek.test.model.Address;
import com.oriontek.test.service.AddressServiceImpl;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AddressController {

    private AddressServiceImpl addressService;

    public AddressController(AddressServiceImpl addressService) {
        this.addressService = addressService;
    }

    @PatchMapping("/address/update")
    public void updateUser(@RequestBody Address address){
        this.addressService.update(address);
    }



}
