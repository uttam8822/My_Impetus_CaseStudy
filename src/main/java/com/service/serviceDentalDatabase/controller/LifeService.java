package com.service.serviceDentalDatabase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.model.ServiceUser;
import com.service.serviceDentalDatabase.service.LifeRegistrationService;

@RestController
public class LifeService {
	
	@Autowired
	private LifeRegistrationService service;
	
	@PostMapping("/registerlifeservice")
	@CrossOrigin(origins="http://localhost:4200")
	public LifeUser registerLifeService(@RequestBody LifeUser user) throws Exception{
		
		
		LifeUser userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}

}
