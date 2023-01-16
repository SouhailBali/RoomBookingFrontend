export class Salle{
 public id: number=0;
public designation: string="";
  public  nom: string="";
  public capacite:number=0;
  constructor(id: number, designation: string, nom: string, capacite: number) {
    this.id = id;
    this.designation = designation;
    this.nom = nom;
    this.capacite = capacite;
  }
}
