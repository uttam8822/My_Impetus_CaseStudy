package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
 
import com.service.serviceDentalDatabase.repo.DentalVisionRepo;
 

@Service
public class DentalVisionRegistration {
	
	
	
	@Autowired
	private DentalVisionRepo repo;
	public DentalVisionUser saveUser(DentalVisionUser user) {
		return repo.save(user);
	}

}
