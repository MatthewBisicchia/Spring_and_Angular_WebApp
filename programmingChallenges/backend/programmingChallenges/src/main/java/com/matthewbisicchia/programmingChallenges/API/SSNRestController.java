package com.matthewbisicchia.programmingChallenges.API;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matthewbisicchia.programmingChallenges.Database.DataServices.IDDataService;
import com.matthewbisicchia.programmingChallenges.Model.Applications.SocialSecurityNumberFormatter;
import com.matthewbisicchia.programmingChallenges.Model.DataTypes.ID;

@RestController
@RequestMapping("/SSN")
public class SSNRestController 
{	
	public SSNRestController()
	{
		
	}
		
	@PostMapping("/formatSSN/{ssn}")
	public ResponseEntity<String> addID(@PathVariable("ssn") String ssn)
	{
		return new ResponseEntity<>(SocialSecurityNumberFormatter.formatSSN(ssn), HttpStatus.OK);
	}
}
