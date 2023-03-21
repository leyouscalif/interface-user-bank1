import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './Form/authentification/authentification.component';
import { AcceuilComponent } from './Template/acceuil/acceuil.component';
import { ClientComponent } from './Template/client/client.component';
import { CompteCCComponent } from './Template/compte-cc/compte-cc.component';
import { CompteEPComponent } from './Template/compte-ep/compte-ep.component';
import { ErrorPageComponent } from './Template/error-page/error-page.component';
import { OperationComponent } from './Template/operation/operation.component';

const routes: Routes = [
{path: 'authentification', component: AuthentificationComponent},
{path: 'acceuil' , component: AcceuilComponent},
{path: 'client', component: ClientComponent},
{path: 'compteCourant', component: CompteCCComponent },
{path: 'compteEpagne' , component: CompteEPComponent},
{path: 'operation' , component: OperationComponent},
{path: "", redirectTo:'acceuil', pathMatch: 'full'},
{path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
