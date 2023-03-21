import { Compte } from "./modelCompte";

export interface Operation{
  id: String;
  montant: Number;
  dateOpera: Date;
  compte: Compte;
  typeOpera : String
}
