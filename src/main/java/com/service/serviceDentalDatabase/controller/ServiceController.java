package com.service.serviceDentalDatabase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.ServiceUser;
import com.service.serviceDentalDatabase.repo.ServiceRepo;
import com.service.serviceDentalDatabase.service.RegistrationService;

//submit method when user submit
@RestController
public class ServiceController {

	@Autowired
	private RegistrationService service;
	
	@Autowired
	private ServiceRepo servicedata;
	
	@PostMapping("/registeruserservice")
	@CrossOrigin(origins="http://localhost:4200")
	public ServiceUser resisterUserService(@RequestBody ServiceUser user) throws Exception {
		
		
		ServiceUser userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	@GetMapping("/getdentaldata")
	@CrossOrigin(origins="http://localhost:4200")
	List<ServiceUser> getUser(){
		return servicedata.findAll();
	}
	
}
