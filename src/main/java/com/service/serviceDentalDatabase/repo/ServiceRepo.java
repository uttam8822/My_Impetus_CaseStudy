package com.service.serviceDentalDatabase.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.service.serviceDentalDatabase.model.ServiceUser;


@Repository
public interface ServiceRepo extends JpaRepository<ServiceUser,String>{
	
	@Override
	List<ServiceUser> findAll();
}
