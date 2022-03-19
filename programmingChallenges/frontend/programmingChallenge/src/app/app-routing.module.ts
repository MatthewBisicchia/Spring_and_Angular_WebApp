import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { IdGeneratorComponent } from './components/id-generator/id-generator.component';
import { BackToDashboardBarComponent } from './components/back-to-dashboard-bar/back-to-dashboard-bar.component';
import { PhoneAndSSNFormatterComponent } from './components/PhoneAndSSNFormatter/phone-and-ssnformatter/phone-and-ssnformatter.component';
import { FrontPageComponent } from './components/front-page/front-page.component';


const routes: Routes = [
  {path: "", component: HeaderBarComponent},
  {path: "", component: HomePageComponent, outlet: "main" },
  {path: "idGenerator", component: BackToDashboardBarComponent},
  {path: "idGenerator", component: IdGeneratorComponent, outlet: "main" },
  {path: "phoneAndSSNFormatter", component: BackToDashboardBarComponent},
  {path: "phoneAndSSNFormatter", component: PhoneAndSSNFormatterComponent, outlet: "main" }
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
