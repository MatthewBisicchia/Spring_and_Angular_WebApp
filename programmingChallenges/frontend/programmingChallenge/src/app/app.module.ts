import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/headerBar/header-bar/header-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { IdGeneratorComponent } from './components/apps/idGenerator/id-generator/id-generator.component';
import { BackToDashboardBarComponent } from './components/headerBar/back-to-dashboard-bar/back-to-dashboard-bar.component';
import { BulkGenComponent } from './components/apps/idGenerator/bulk-gen/bulk-gen.component';
import { QuickGenComponent } from './components/apps/idGenerator/quick-gen/quick-gen.component';
import { PhoneAndSSNFormatterComponent } from './components/apps/phoneAndSSNFormatter/phone-and-ssnformatter/phone-and-ssnformatter.component';
import { TerminalComponent } from './components/apps/phoneAndSSNFormatter/terminal/terminal.component';
import { HttpClientModule } from '@angular/common/http';
import { IDAPIService } from './API/APIServices/IDAPIService';
import { QuickGenResultComponent } from './components/apps/idGenerator/quick-gen/quick-gen-result/quick-gen-result.component';
import { MyIDsComponent } from './components/apps/idGenerator/my-ids/my-ids.component';
import { PhoneNumbersDirectoryComponent } from './components/apps/phoneAndSSNFormatter/phone-numbers-directory/phone-numbers-directory.component';
import { CsvToAddressBookComponent } from './components/apps/csvToAddressBook/csv-to-address-book/csv-to-address-book.component';

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
    PhoneNumbersDirectoryComponent,
    CsvToAddressBookComponent
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
