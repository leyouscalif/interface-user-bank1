import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { AuthentificationComponent } from './Form/authentification/authentification.component';
import { FormClientComponent } from './Form/form-client/form-client.component';
import { FormCompteComponent } from './Form/form-compte/form-compte.component';
import { FormOperationComponent } from './Form/form-operation/form-operation.component';
import { ClientService } from './Services/client.service';
import { AcceuilComponent } from './Template/acceuil/acceuil.component';
import { ClientComponent } from './Template/client/client.component';
import { CompteCCComponent } from './Template/compte-cc/compte-cc.component';
import { CompteEPComponent } from './Template/compte-ep/compte-ep.component';
import { ErrorPageComponent } from './Template/error-page/error-page.component';
import { OperationComponent } from './Template/operation/operation.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ClientComponent,
    CompteCCComponent,
    CompteEPComponent,
    ErrorPageComponent,
    OperationComponent,
    AuthentificationComponent,
    FormClientComponent,
    FormCompteComponent,
    FormOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
