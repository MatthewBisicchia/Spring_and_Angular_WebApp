import { Component, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ID } from 'src/app/API/Model/ID';
import { QuickGenComponent } from '../quick-gen.component';
import { IdGeneratorComponent } from '../../id-generator/id-generator.component';
import { IDAPIService } from 'src/app/API/APIServices/IDAPIService';

@Component({
  selector: 'app-quick-gen-result',
  templateUrl: './quick-gen-result.component.html',
  styleUrls: ['./quick-gen-result.component.css']
})
export class QuickGenResultComponent implements OnInit {

  @Input() quickGenComponent : QuickGenComponent;
  @Input('result') result: string;

  constructor(@Inject(DOCUMENT) private document: Document, private idAPIDataService : IDAPIService) { }

  ngOnInit(): void {
    let element = this.document.getElementById("outputResult");

    if(element != null)
    {
      let id = this.idAPIDataService.getGeneratedID();
      console.log(id);
      element.insertAdjacentHTML("beforeend", '<p>' + id + '</p>');
    }

  }

}
