import {Salle} from "./salle.model";

export class Reservation{
  public id:number=0;
  public beginRes:Date=new Date();
  public endRes:Date=new Date();
  // @ts-ignore
  public salle:Salle=new Salle();
  constructor(id:number,beginRes:Date,endRes:Date,salle:Salle) {
    this.id=id;
    this.beginRes=beginRes;
    this.endRes=endRes;
    this.salle=salle;
  }
}
