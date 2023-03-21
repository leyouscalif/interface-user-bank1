import { Client } from "./modelCliente";

export interface Compte{
  id: String;
  solde: Number;
  date: Date;
  client: Client;
  statut: String;
}
