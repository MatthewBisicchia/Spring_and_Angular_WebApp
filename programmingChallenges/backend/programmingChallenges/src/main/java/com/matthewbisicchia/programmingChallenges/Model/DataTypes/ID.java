package com.matthewbisicchia.programmingChallenges.Model.DataTypes;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ID implements Serializable 
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long objectId;
	
	@Column(nullable = false, updatable = false)
	private String id;
	
	public ID() 
	{
		this.id = "test";
	}
	
	public ID(String id)
	{
		this.id = id;
	}
	
	public String toString()
	{
		return id;
	}
	
	public void setObjectId(Long objectId)
	{
		this.objectId = objectId;
	}
	
	public Long getObjectId()
	{
		return objectId;
	}
	
	public void setId(String id)
	{
		this.id = id;
	}
	
	public String getId()
	{
		return id;
	}
}
