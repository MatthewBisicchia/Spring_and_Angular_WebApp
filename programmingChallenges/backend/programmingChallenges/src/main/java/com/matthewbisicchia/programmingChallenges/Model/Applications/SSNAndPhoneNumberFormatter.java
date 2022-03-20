package com.matthewbisicchia.programmingChallenges.Model.Applications;

import com.matthewbisicchia.programmingChallenges.Model.DataTypes.FormatterResponse;
import com.matthewbisicchia.programmingChallenges.Model.DataTypes.ID;

public class SSNAndPhoneNumberFormatter 
{
	// Stores the user selection of a previous command
	private static String userSelection = "";
	
	
	// This will return an SSN, or Phone, or an Empty response, as per the 
	// output of the formatter based on the input
	public static FormatterResponse formatSSNorPhoneNumber(String input) 
	{
		// Response could be empty (in the case of initial command entered), an error, or the string output of formatted SSN or Phone Number
		String response = "";
					
		try {
			
			// Name from API is given in brackets ( { } ); must be removed
			input = input.substring(1, input.length() - 1);
					
			
			if(input.equals("Q") || input.equals("q"))
			{
				response = "Done formatting, refresh page to start new terminal instance.";
				
				// Clear any previous state:
				userSelection = "";
			}
			else if(input.equals("1") && !userSelection.equals("ssn"))
			{
				userSelection = "phoneNumber";
				
				//will send empty response
			}
			else if(input.equals("2") && !userSelection.equals("phoneNumber"))
			{
				userSelection = "ssn";
				
				//will send empty response
			}
			else if(userSelection.equals("phoneNumber"))
			{
				if(input.length() == 10)
				{
					if(!checkIfInvalid(input))
					{
						// Format Phone Number
						
						response = "(" + input.substring(0, 3) + ")" + input.substring(3, 6) + "-" + input.substring(6);									
						
						// Clear any previous state:
						userSelection = "";
						
						// Store into Phone Number into database (if creating directory):
					}
					else 
					{
						response = "Invalid Characters in input " + input ;
					}
				}
				else 
				{
					response = "Error! Phone numbers should be 10 digits long.";
				}
			}
			else if(userSelection.equals("ssn"))
			{
				if(input.length() == 9)
				{
					if(!checkIfInvalid(input))
					{
						// Format SSN
						
						response = input.substring(0, 3) + "-" + input.substring(3, 5) + "-" + input.substring(5);						
						
						// Clear any previous state:
						userSelection = "";
						
						// By design, SSN numbers are NOT stored in database
					}
					else
					{
						response = "Invalid Characters in input " + input ;
					}
				}
				else
				{
					response = "Error! Social security numbers should be 9 digits long.";
				}
			}
			else 
			{
				response = "Error:" + input + " is not a valid command";
			}
		}
		catch(Exception e)
		{
			response = "Error:" + input + " is not a valid command";
		}
				
		return new FormatterResponse(response);
	}
	
	// Utility Method
	private static boolean checkIfInvalid(String input)
	{
		String[] splicedInput = input.split("");
		
		boolean invalidInput = false;
		boolean checking = true;
		
		for(int i = 0; checking && i < splicedInput.length; i++)
		{
			if(!splicedInput[i].equals("1") && !splicedInput[i].equals("2") && !splicedInput[i].equals("3") && !splicedInput[i].equals("4") && !splicedInput[i].equals("5") &&
					!splicedInput[i].equals("6") && !splicedInput[i].equals("7") && !splicedInput[i].equals("8") && !splicedInput[i].equals("9") && !splicedInput[i].equals("0"))
			{
				checking = false;
				invalidInput = true;				
			}			
		
		}
		
		return invalidInput;
	}
}
