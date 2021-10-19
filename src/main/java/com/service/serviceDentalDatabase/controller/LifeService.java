package com.service.serviceDentalDatabase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.model.ServiceUser;
import com.service.serviceDentalDatabase.repo.LifeRepo;
import com.service.serviceDentalDatabase.service.LifeRegistrationService;

@RestController
public class LifeService {
	
	@Autowired
	private LifeRegistrationService service;
	
	@Autowired
	private LifeRepo servicedata;
	
	@PostMapping("/registerlifeservice")
	@CrossOrigin(origins="http://localhost:4200")
	public LifeUser registerLifeService(@RequestBody LifeUser user) throws Exception{
		
		
		LifeUser userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	
	
	@GetMapping("/getlifedata")
	@CrossOrigin(origins="http://localhost:4200")
	List<LifeUser> getUser(){
		return servicedata.findAll();
	}
	

}
