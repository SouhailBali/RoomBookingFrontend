export class Salle{
 public id: number=0;
public designation: string="";
  public  nom: string="";
  public  photoName: string="";
  public capacite:number=0;
  constructor(id: number, designation: string, nom: string, capacite: number,photoName: string) {
    this.id = id;
    this.designation = designation;
    this.nom = nom;
    this.capacite = capacite;
    this.photoName = photoName;
  }
}
