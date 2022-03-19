import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { 
  }

  ngOnInit(): void {
    this.setEventListener();
  }

  setEventListener() {
    let inputCommand = document.getElementById('inputCommand');

    if(inputCommand != null)
    {
      let command = (<HTMLInputElement>inputCommand).value;

      inputCommand.addEventListener("keyup", function(event) {

        if(event.keyCode === 13)
        {
          event.preventDefault();

          let command = (<HTMLInputElement>inputCommand).value;

          (<HTMLInputElement>inputCommand).value = '';

          let inputWindow = document.getElementById('previousCommands');
          
          if(inputWindow != null)
          {
            inputWindow.insertAdjacentHTML('beforeend', '<div contenteditable="false">>'  + command + '</div>');
          }
        }
      });
    }
  }

}
