import { Component, OnInit } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal.component';
import { PhoneNumbersDirectoryComponent } from '../phone-numbers-directory/phone-numbers-directory.component';

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
    else if (component == "PhoneNumbersDirectoryComponent")
    {
      this.selectedComponent = PhoneNumbersDirectoryComponent;
    }

  }

}
