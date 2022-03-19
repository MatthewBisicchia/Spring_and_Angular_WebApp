import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { IdGeneratorComponent } from './components/id-generator/id-generator.component';
import { BackToDashboardBarComponent } from './components/back-to-dashboard-bar/back-to-dashboard-bar.component';
import { BulkGenComponent } from './components/bulk-gen/bulk-gen.component';
import { QuickGenComponent } from './components/quick-gen/quick-gen.component';
import { PhoneAndSSNFormatterComponent } from './components/PhoneAndSSNFormatter/phone-and-ssnformatter/phone-and-ssnformatter.component';
import { TerminalComponent } from './components/PhoneAndSSNFormatter/terminal/terminal.component';
import { HttpClientModule } from '@angular/common/http';
import { IDAPIService } from './API/APIServices/IDAPIService';
import { QuickGenResultComponent } from './components/quick-gen/quick-gen-result/quick-gen-result.component';
import { MyIDsComponent } from './components/my-ids/my-ids.component';
import { FrontPageComponent } from './components/front-page/front-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomePageComponent,
    IdGeneratorComponent,
    BackToDashboardBarComponent,
    BulkGenComponent,
    QuickGenComponent,
    PhoneAndSSNFormatterComponent,
    TerminalComponent,
    QuickGenResultComponent,
    MyIDsComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ IDAPIService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
