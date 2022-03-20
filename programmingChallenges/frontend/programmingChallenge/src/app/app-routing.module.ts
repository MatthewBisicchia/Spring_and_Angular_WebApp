import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HeaderBarComponent } from './components/headerBar/header-bar/header-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { IdGeneratorComponent } from './components/apps/idGenerator/id-generator/id-generator.component';
import { BackToDashboardBarComponent } from './components/headerBar/back-to-dashboard-bar/back-to-dashboard-bar.component';
import { PhoneAndSSNFormatterComponent } from './components/apps/phoneAndSSNFormatter/phone-and-ssnformatter/phone-and-ssnformatter.component';
import { CsvToAddressBookComponent } from './components/apps/csvToAddressBook/csv-to-address-book/csv-to-address-book.component';


const routes: Routes = [
  {path: "", component: HeaderBarComponent},
  {path: "", component: HomePageComponent, outlet: "main" },
  {path: "idGenerator", component: BackToDashboardBarComponent},
  {path: "idGenerator", component: IdGeneratorComponent, outlet: "main" },
  {path: "phoneAndSSNFormatter", component: BackToDashboardBarComponent},
  {path: "phoneAndSSNFormatter", component: PhoneAndSSNFormatterComponent, outlet: "main" },
  {path: "csvToAddressBook", component: BackToDashboardBarComponent},
  {path: "csvToAddressBook", component: CsvToAddressBookComponent, outlet: "main" },
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
