package com.service.serviceDentalDatabase.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.service.serviceDentalDatabase.model.ServiceUser;


public interface ServiceRepo extends JpaRepository<ServiceUser,String>{
	
	
}