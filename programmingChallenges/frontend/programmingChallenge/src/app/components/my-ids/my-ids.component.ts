import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { IDAPIService } from 'src/app/API/APIServices/IDAPIService';

@Component({
  selector: 'app-my-ids',
  templateUrl: './my-ids.component.html',
  styleUrls: ['./my-ids.component.css']
})
export class MyIDsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private idAPIDataService : IDAPIService) { }

  ngOnInit(): void {
    let element = this.document.getElementById("outputResult");

    if(element != null)
    {
      let ids = this.idAPIDataService.getIDs();
 
      ids.forEach(function(id) { element!.insertAdjacentHTML("beforeend", '<p>' + id.id + '</p>') });
      
    }
  }

}
