import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PhoneAndSSNFormatterAPIService } from 'src/app/API/APIServices/PhoneAndSSNFormatterAPIService';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private phoneAndSSNFormatterAPIService : PhoneAndSSNFormatterAPIService) { 
  }

  ngOnInit(): void {
    this.setEventListener();
    this.document.getElementById("inputCommand")!.focus();
  }

  setEventListener() {
    let inputCommand = document.getElementById('inputCommand');

    var tempAPIRef = this.phoneAndSSNFormatterAPIService;
    
    if(inputCommand != null)
    {
      // let command = (<HTMLInputElement>inputCommand).value;

      // Create the "Enter Key Press" event:
      inputCommand.addEventListener("keyup", async function(event) {

        if(event.keyCode === 13)
        {
            event.preventDefault();

            // Get the command: 
            let command : String = (<HTMLInputElement>inputCommand).value;

            
            // Clear the command line frontend:
            (<HTMLInputElement>inputCommand).value = '';

            // Add the executed command to the user input:
            let inputWindow = document.getElementById('previousCommands');
            if(inputWindow != null)
            {
              inputWindow.insertAdjacentHTML('beforeend', '<div contenteditable="false">>'  + command + '</div>');
            }
            
            console.log(command);

            // Send Command to the backend server to be executed: 
            await tempAPIRef.sendCommand(command);

            let response : String = tempAPIRef.getOutput();

            // Add the output to the ouptut window:
            let outputWindow = document.getElementById('outputWindow');
            if(outputWindow != null)
            {
              

              if(response == "Done formatting, refresh page to start new terminal instance.")
              {
                (<HTMLInputElement>inputCommand).disabled = true;
                if(document.getElementById('commandLineArrow') != null)
                {
                  document.getElementById('commandLineArrow')!.style.display = 'none';
                }
              }
              
              if(response != "")
              {
                outputWindow.insertAdjacentHTML('beforeend', '<div contenteditable="false">'  + response + '</div>');
              }
            }
            
          
        }
      });
    }
  }

}
