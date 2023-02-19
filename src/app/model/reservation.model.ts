import {Salle} from "./salle.model";
import {Materiel} from "./Materiel.model";

export class Reservation{
  public id:number=0;
  public beginRes:Date=new Date();
  public endRes:Date=new Date();
  // @ts-ignore
  public salle:Salle=new Salle();
  // @ts-ignore
  public materiel:Materiel=new Materiel();
  constructor(id:number,beginRes:Date,endRes:Date,salle:Salle,materiel:Materiel) {
    this.id=id;
    this.beginRes=beginRes;
    this.endRes=endRes;
    this.salle=salle;
    this.materiel=materiel;
  }
}
