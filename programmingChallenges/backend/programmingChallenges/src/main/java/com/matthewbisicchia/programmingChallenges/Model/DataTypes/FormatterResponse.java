package com.matthewbisicchia.programmingChallenges.Model.DataTypes;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FormatterResponse implements Serializable
{		
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long objectId;
	
	@Column(nullable = false, updatable = false)	
	private String formatterResponse;
	
	public FormatterResponse() 
	{
		this.formatterResponse = "";
	}
	
	public FormatterResponse(String formatterResponse)
	{
		this.formatterResponse = formatterResponse;
	}
	
	public String toString()
	{
		return formatterResponse;
	}
	
	public void setFormatterResponse(String formatterResponse)
	{
		this.formatterResponse = formatterResponse;
	}
	
	public String getFormatterResponse()
	{
		return formatterResponse;
	}
}
