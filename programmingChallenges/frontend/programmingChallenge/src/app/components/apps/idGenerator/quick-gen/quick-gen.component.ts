import { Component, OnInit } from '@angular/core';
import { IDAPIService } from 'src/app/API/APIServices/IDAPIService';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { IdGeneratorComponent } from '../id-generator/id-generator.component';

@Component({
  selector: 'app-quick-gen',
  templateUrl: './quick-gen.component.html',
  styleUrls: ['./quick-gen.component.css']
})
export class QuickGenComponent implements OnInit {

  constructor(private idAPIService : IDAPIService, @Inject(DOCUMENT) private document: Document, private idGeneratorComponent : IdGeneratorComponent) { }

  ngOnInit(): void {
  }

  public async generateID()
  {    
    let textInputBox = this.document.getElementById('textInputBox');
    let caption = this.document.getElementById('inputCaption');

    if(textInputBox != null && caption != null)
    {
      const name = (<HTMLInputElement>textInputBox).value;

     
      caption.innerHTML = "Generating ID . . . ";
      caption.style.color = 'red';

      await this.idAPIService.generateID(name);
    
      this.switchToResultComponent();
    }

  }

  switchToResultComponent()
  {
    this.idGeneratorComponent.selectComponent("QuickGenResultComponent");
  }
  
}
