package com.service.serviceDentalDatabase.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.repo.LifeRepo;

 
@Service
public class LifeRegistrationService {
	
	
	
	@Autowired
	private LifeRepo repo;
	public LifeUser saveUser(LifeUser user) {
		return repo.save(user);
	}

}
