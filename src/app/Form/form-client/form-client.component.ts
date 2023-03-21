import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/modelCliente';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

    listC: Client[]|undefined
    formClient: FormGroup|undefined
    formCheck!: FormGroup
    client!: Client
    errorMessage: any
    @Output() dataChildForms = new EventEmitter()

  constructor(private clientService: ClientService,
    private route:ActivatedRoute ,private fb: FormBuilder) { }

  ngOnInit(): void {
      this.formCheck=this.fb.group({
        type: this.fb.control('',[Validators.required])
      })

    this.formClient=this.fb.group({
      id: this.fb.control(""),
      nom: this.fb.control("",[Validators.required]),
      email: this.fb.control("",[Validators.required])
    })

  }

  sendMethode(){
    let form= this.formClient?.value;
    let idClient: String = this.formClient?.value.id
    if (this.formCheck.value.type == "created"){
        this.clientService.saveClient(form).subscribe({
          next: (rep)=> {alert("le user "+this.formClient?.value.nom+" a ete creer avec succè!"),
                        this.formClient?.reset,
                        console.log(rep)
              },
          error: (err)=> this.errorMessage=err.message
        })
    } else{
      this.clientService.updateClient(idClient, this.formClient?.value).subscribe({
        next: (clt)=>{this.client=clt,
          console.log(this.client)},
          //confirm("Les nouvelles modifications effectuées sur le user "+this.client.nom +" seront prisent en compte et les anciennes seront supprimées!!!")},
        error: (err)=>this.errorMessage=err
      })
    }

  }
      sendEventBindingForms(){
        this.dataChildForms.emit(this.sendMethode())
      }

      selected(): Boolean{
        return this.formCheck.valid
      }
 }




