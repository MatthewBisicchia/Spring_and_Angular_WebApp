package com.matthewbisicchia.programmingChallenges.API;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matthewbisicchia.programmingChallenges.Model.Applications.SSNAndPhoneNumberFormatter;
import com.matthewbisicchia.programmingChallenges.Model.DataTypes.FormatterResponse;
import com.matthewbisicchia.programmingChallenges.Model.DataTypes.ID;

@RestController
@RequestMapping("/SSNandPhoneNumberFormatter")
public class SSNAndPhoneNumberFormatterRestController 
{		
	public SSNAndPhoneNumberFormatterRestController()
	{
	}
		
	@CrossOrigin
	@PostMapping("/format/{input}")
	public ResponseEntity<FormatterResponse> formatSSN(@PathVariable("input") String input)
	{
		return new ResponseEntity<>(SSNAndPhoneNumberFormatter.formatSSNorPhoneNumber(input), HttpStatus.OK);
	}
}
