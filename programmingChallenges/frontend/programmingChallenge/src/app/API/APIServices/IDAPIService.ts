import { HttpClient } from '@angular/common/http'
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ID } from '../Model/ID';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})

export class IDAPIService {

    private apiURL = environment.apiURL;

    private generatedId : ID;

    private ids : ID[];

    constructor(private httpClient : HttpClient){}


    public async getIDsFromDatabase()
    {
        const response = await lastValueFrom(this.httpClient.get<ID[]>(`${this.apiURL}/ID/getAllIDs`)); 
      
        this.ids = response;    
    }

    public getIDs() : ID[]
    {
        return this.ids;
    }
    

    public async generateID(name: String)
    {
        const response = await lastValueFrom(this.httpClient.post<ID>(`${this.apiURL}/ID/generateID/{${name}}`, '')); 
      
        this.generatedId = response;
    }


    public getGeneratedID() : String
    {
        return this.generatedId.id;
    }
      
}