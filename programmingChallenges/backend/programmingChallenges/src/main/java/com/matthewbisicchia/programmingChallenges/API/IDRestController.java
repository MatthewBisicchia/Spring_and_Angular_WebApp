package com.matthewbisicchia.programmingChallenges.API;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matthewbisicchia.programmingChallenges.Database.DataServices.IDDataService;
import com.matthewbisicchia.programmingChallenges.Model.DataTypes.ID;

@RestController
@RequestMapping("/ID")
public class IDRestController 
{
	private final IDDataService idDataService;
	
	public IDRestController(IDDataService idDataService)
	{
		this.idDataService = idDataService;
	}
	
	@CrossOrigin
	@GetMapping("/getAllIDs")
	public ResponseEntity<List<ID>> getAllIDs()
	{
		return new ResponseEntity<>(idDataService.findAllIDs(), HttpStatus.OK);
	}
	
	@CrossOrigin
	@PostMapping("/generateID/{name}")
	public ResponseEntity<ID> addID(@PathVariable("name") String name)
	{
		return new ResponseEntity<>(idDataService.addID(name), HttpStatus.OK);
	}
}
