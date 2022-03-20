package com.matthewbisicchia.programmingChallenges.Model.Applications;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.matthewbisicchia.programmingChallenges.Database.DataServices.IDDataService;
import com.matthewbisicchia.programmingChallenges.Model.DataTypes.ID;

public class IDGenerator 
{
	
	public static ID generateID(String name, IDDataService idDataService) throws Exception
	{
		String idString = "";
		
		name = name.trim().replaceAll(" ", "");
			
		if(!checkIfInvalid(name.toUpperCase())) 
		{			
			try 
			{
				idString = name.substring(0, 3).toUpperCase() + "005";			
			}
			catch(Exception e) 
			{
				if(name.length() == 1)
				{
					idString = name.toUpperCase() + "X" + "X" + "005";
				}
				else if(name.length() == 2)
				{
					idString = name.toUpperCase() + "X" + "005";
				}
			}
			
			final String temp = idString;
				
			ID match = null;
			
			try 
			{
				List<ID> database = idDataService.findAllIDs();
				Collections.reverse(database);
				match = database.stream().filter((id) -> (id.getId().substring(0, 3).equals(temp.substring(0, 3)))).findFirst().get();
			}
			catch(Exception e)
			{
				// No Match Found
			}
			
			if(match != null)
			{
				final String digits = (Integer.parseInt(match.getId().substring(3, 6)) + 5) + "";
				
				if(digits.length() == 2)
				{
					// Then, zero pad it
					idString = idString.substring(0, 3) + "0" + digits;
				}
				else if(digits.equals("1000"))
				{
					throw new Exception("Maximum number of IDs for first 3 letter sequence reached");
				}
				else
				{
					idString = idString.substring(0, 3) + digits;
				}
			}
		}
		else 
		{
			throw new Exception("Invalid Name Entered");
		}
						
		return new ID(idString);
	}
	
	
	// Utility Method
	private static boolean checkIfInvalid(String input)
	{
		String[] splicedInput = input.split("");
		
		boolean invalidInput = false;
		boolean checking = true;
		
		for(int i = 0; checking && i < splicedInput.length; i++)
		{
			if(!splicedInput[i].equals("A") && !splicedInput[i].equals("B") && !splicedInput[i].equals("C") && !splicedInput[i].equals("D") && !splicedInput[i].equals("E") &&
					!splicedInput[i].equals("F") && !splicedInput[i].equals("G") && !splicedInput[i].equals("H") && !splicedInput[i].equals("I") && !splicedInput[i].equals("J") &&
						!splicedInput[i].equals("K") && !splicedInput[i].equals("L") && !splicedInput[i].equals("M") && !splicedInput[i].equals("N") && !splicedInput[i].equals("O") &&
							!splicedInput[i].equals("P") && !splicedInput[i].equals("Q") && !splicedInput[i].equals("R") && !splicedInput[i].equals("S") && !splicedInput[i].equals("T") &&
								!splicedInput[i].equals("U") && !splicedInput[i].equals("V") && !splicedInput[i].equals("W") && !splicedInput[i].equals("X") && !splicedInput[i].equals("Y") &&
										!splicedInput[i].equals("Z"))
			{
				checking = false;
				invalidInput = true;				
			}			
		
		}
		
		return invalidInput;
	}
	
	
}
