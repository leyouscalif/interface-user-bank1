import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from 'src/app/model/modelCliente';
import { ClientService } from 'src/app/Services/client.service';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
responseChildForms() {
throw new Error('Method not implemented.');
}
  Clients: Array<Client>| undefined
  client!:Client
  searchFormClient!: FormGroup| undefined

  errorMessage: any
  constructor( private clientService: ClientService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.searchFormClient=this.fb.group({
      keyword: this.fb.control("")
    });
    this.afficheList();
      //  this.rechercheNom()
  }
    deletClient(id:String){
      this.clientService.deletClient(id).subscribe({
        next: (resp)=>confirm("vous este sur le point d' effectier une suppression!!! Tape sur ok pour confirmer"),
        error: (err)=> this.errorMessage=err

      })
    }
    afficheList(){
      this.clientService.getListclients().subscribe(
        {
          next:(list:Client[])=>{this.Clients = list},
          error: (err)=>{console.log(err)}
        });


    }

  rechercheNom() {
    let resultat :String = this.searchFormClient?.value.keyword;
    if (resultat!=null){
        this.clientService.searchClient(resultat).subscribe({
          next:(listes:Client[]) => {this.Clients=listes,
                console.log(listes)
          },
          error: (err)=> console.log(err)
        })
    }
  }
  responseForms(message: any){
    this.afficheList();
  }


}

