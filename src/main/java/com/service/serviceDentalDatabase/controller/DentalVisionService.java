package com.service.serviceDentalDatabase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.serviceDentalDatabase.model.DentalVisionUser;
import com.service.serviceDentalDatabase.model.ServiceUser;
import com.service.serviceDentalDatabase.repo.DentalVisionRepo;
import com.service.serviceDentalDatabase.service.DentalVisionRegistration;



@RestController
public class DentalVisionService {
	
	@Autowired
	private DentalVisionRegistration service;
	
	@Autowired
	private DentalVisionRepo servicedata;
	
	@PostMapping("/registerdentalvisionservice")
	@CrossOrigin(origins="http://localhost:4200")
	public DentalVisionUser resisterUserService(@RequestBody DentalVisionUser user) throws Exception {
		
		
		DentalVisionUser userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	
	@GetMapping("/getdentalvisiondata")
	@CrossOrigin(origins="http://localhost:4200")
	List<DentalVisionUser> getUser(){
		return servicedata.findAll();
	}

}
