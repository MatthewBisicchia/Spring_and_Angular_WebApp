import { Component } from '@angular/core';
import { IDAPIService } from './API/APIServices/IDAPIService';
import { ID } from './API/Model/ID';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Programming Challenges';

  constructor(private idAPIService : IDAPIService) {}
  
}
