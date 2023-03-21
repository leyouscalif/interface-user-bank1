import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../model/modelCliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

    public getListclients():Observable<Array<Client>>{
      return this.http.get<Array<Client>>(environment.backendHost+"/clients")
    }
    public searchClient(keyword:String):Observable<Array<Client>>{
      return this.http.get<Array<Client>>(environment.backendHost+"/clients/search?keyword="+keyword)
    }
    public saveClient(client:Client):Observable<Client>{
      return this.http.post<Client>(environment.backendHost+"/clients/ajout", client)
    }
    public updateClient(id:String , client :Client): Observable<Client>{
      return this.http.put<Client>(environment.backendHost+"/clients/modifier/"+id, client)
    }
    public deletClient(id:String){
      return this.http.delete(environment.backendHost+"/clients/supprimer/"+id)
    }


}
