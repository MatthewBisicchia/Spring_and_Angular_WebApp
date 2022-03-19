import { Component, OnInit } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal.component';
import { BulkGenComponent } from '../../bulk-gen/bulk-gen.component';

@Component({
  selector: 'app-phone-and-ssnformatter',
  templateUrl: './phone-and-ssnformatter.component.html',
  styleUrls: ['./phone-and-ssnformatter.component.css']
})
export class PhoneAndSSNFormatterComponent implements OnInit {

  selectedComponent : any = TerminalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  selectComponent(component: string)
  {
    if (component === "TerminalComponent")
    {
      this.selectedComponent = TerminalComponent;
    }
    else if (component === "BulkGenComponent")
    {
      this.selectedComponent = BulkGenComponent;
    }

  }

}
