package com.oriontek.test.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Address implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String road;
    private String city;
    private String zipCode;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="client_id", nullable=false)
    Client client;
}
