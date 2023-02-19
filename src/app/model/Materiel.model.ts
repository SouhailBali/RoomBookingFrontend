export class Materiel{
  public id:number=0;
  public  reference: string="";
  public  nom: string="";

  constructor(id: number, reference: string, nom: string) {
    this.id = id;
    this.reference = reference;
    this.nom = nom;
  }
}
