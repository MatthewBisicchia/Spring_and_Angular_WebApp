import { HttpClient } from '@angular/common/http'
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { FormatterResponse } from '../Model/FormatterResponse';

@Injectable ({
    providedIn: 'root'
})

export class PhoneAndSSNFormatterAPIService {

    private apiURL = environment.apiURL;

    private output : FormatterResponse;


    constructor(private httpClient : HttpClient){}


    public async sendCommand(command : String)
    {
        const response = await lastValueFrom(this.httpClient.post<FormatterResponse>(`${this.apiURL}/SSNandPhoneNumberFormatter/format/{${command}}`, '')); 
      
        console.log(response);
        this.output = response;
    }

    // public async formatSSNNumber(ssn : String)
    // {
    //     const response = await lastValueFrom(this.httpClient.post<SSN>(`${this.apiURL}/SSN/formatSSN/{${ssn}}`, '')); 
      
    //     this.ssnOutput = response;
    // }

    public getOutput() : String
    {
        return this.output.formatterResponse;
    }

      
}