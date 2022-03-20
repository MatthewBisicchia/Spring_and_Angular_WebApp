import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-bulk-gen',
  templateUrl: './bulk-gen.component.html',
  styleUrls: ['./bulk-gen.component.css']
})
export class BulkGenComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  addEntry()
  {
    let element = this.document.getElementById("inputBoxes");

    if(element != null)
    {
      element.insertAdjacentHTML("beforeend", '<input style="font-family: Segoe UI; font-size: 20px; margin-right: 10px; margin-top: 10px; width: 400px;"><br>');
    }
    
  }

}
