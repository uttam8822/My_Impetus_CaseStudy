package com.service.serviceDentalDatabase.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.service.serviceDentalDatabase.model.LifeUser;
import com.service.serviceDentalDatabase.model.ServiceUser;

@Repository
public interface LifeRepo extends JpaRepository<LifeUser,String> {

	@Override
	List<LifeUser> findAll();
}
