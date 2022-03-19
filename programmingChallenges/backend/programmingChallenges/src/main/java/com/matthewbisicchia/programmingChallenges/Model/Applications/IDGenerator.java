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
	
	public static ID generateID(String name, IDDataService idDataService) throws IllegalArgumentException
	{
		String idString = "";
		
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
				throw new IllegalArgumentException("Maximum number of IDs for first 3 letter sequence reached");
			}
			else
			{
				idString = idString.substring(0, 3) + digits;
			}
		}
					
		return new ID(idString);
	}
	
	
}
