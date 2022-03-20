package com.matthewbisicchia.programmingChallenges.Model.DataTypes;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PhoneNumber implements Serializable 
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long objectId;
	
	@Column(nullable = false, updatable = false)
	private String phoneNumber;
	
	public PhoneNumber() 
	{
		this.phoneNumber = "test";
	}
	
	public PhoneNumber(String phoneNumber)
	{
		this.phoneNumber = phoneNumber;
	}
	
	public String toString()
	{
		return phoneNumber;
	}
	
	public void setObjectId(Long objectId)
	{
		this.objectId = objectId;
	}
	
	public Long getObjectId()
	{
		return objectId;
	}
	
	public void setPhoneNumber(String phoneNumber)
	{
		this.phoneNumber = phoneNumber;
	}
	
	public String getPhoneNumber()
	{
		return phoneNumber;
	}

}
