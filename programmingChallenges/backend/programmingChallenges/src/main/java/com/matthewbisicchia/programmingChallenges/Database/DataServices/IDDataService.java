package com.matthewbisicchia.programmingChallenges.Database.DataServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.matthewbisicchia.programmingChallenges.Database.Repositories.IDRepository;
import com.matthewbisicchia.programmingChallenges.Model.Applications.IDGenerator;
import com.matthewbisicchia.programmingChallenges.Model.DataTypes.ID;

@Service
@Transactional
public class IDDataService 
{
	private final IDRepository idRepository;

	@Autowired
	public IDDataService(IDRepository idRepository)
	{
		this.idRepository = idRepository;
	}
	
	public ID addID(String name)
	{
		// Name from API is given in brackets ( { } ); must be removed
		name = name.substring(1, name.length() - 1);
		
		// Must Handle Exception!
		try 
		{
	    	return idRepository.save(IDGenerator.generateID(name, this));
		}
		catch(IllegalArgumentException e)
		{
			return new ID("INVALID ID - Reached Maximum Number of IDs for first three letters " + name.substring(0, 3));
		}
		catch(Exception e)
		{
			return new ID("INVALID ID");
		}
	}	
	
	public List<ID> findAllIDs()
	{
	     return idRepository.findAll();
	}
}
