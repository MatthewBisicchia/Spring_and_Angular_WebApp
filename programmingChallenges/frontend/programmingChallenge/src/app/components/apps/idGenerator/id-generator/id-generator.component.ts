import { Component, OnInit } from '@angular/core';
import { IDAPIService } from 'src/app/API/APIServices/IDAPIService';
import { BulkGenComponent } from '../bulk-gen/bulk-gen.component';
import { MyIDsComponent } from '../my-ids/my-ids.component';
import { QuickGenResultComponent } from '../quick-gen/quick-gen-result/quick-gen-result.component';
import { QuickGenComponent } from '../quick-gen/quick-gen.component';

@Component({
  selector: 'app-id-generator',
  templateUrl: './id-generator.component.html',
  styleUrls: ['./id-generator.component.css']
})
export class IdGeneratorComponent implements OnInit {

  selectedComponent : any = QuickGenComponent;

  constructor(private idAPIService : IDAPIService) { }

  ngOnInit(): void {
  }

  selectComponent(component: string)
  {
    if (component === "QuickGenComponent")
    {
      this.selectedComponent = QuickGenComponent;
    }
    else if (component === "BulkGenComponent")
    {
      this.selectedComponent = BulkGenComponent;
    }
    else if (component == "QuickGenResultComponent")
    {
      this.selectedComponent = QuickGenResultComponent;
    }
 
  }


  public async getIDs()
  {   
    // Collect from DataBase
    await this.idAPIService.getIDsFromDatabase();
    
    // Switch to show MyIDsComponent
    this.selectedComponent = MyIDsComponent;
  }

}
