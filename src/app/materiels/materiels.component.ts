import {Component, OnInit} from '@angular/core';
import {RoomBookingService} from "../services/room-booking.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-materiels',
  templateUrl: './materiels.component.html',
  styleUrls: ['./materiels.component.css']
})
export class MaterielsComponent implements OnInit{
  private currentKeyword: string="";
  constructor(public RoomsService:RoomBookingService,private router:Router,public authservice:AuthenticationService) {
  }
  public materiels:any;
  public size:number=5;
  public currentPage:number=0;
  public totalPages: number | undefined;
  public pages: Array<number> | undefined;
  ngOnInit(): void {
  }
  onGetMateriels() {
    this.RoomsService.getMateriels(this.currentPage,this.size).subscribe(
      data=>{

        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        if (this.totalPages != null) {
          this.pages = new Array<number>(this.totalPages)
        }
        this.materiels=data;
      },err=>{
        console.log(err);
      }
    );
  }
  onPageMateriel(i: number) {
    this.currentPage=i;
    this.chercherMateriels();

  }
  onChercher(form:any){
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.chercherMateriels();
  }
  chercherMateriels() {
    this.RoomsService.getMaterielsByDesignation(this.currentKeyword,this.currentPage,this.size).subscribe(
      data=>{

        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        if (this.totalPages != null) {
          this.pages = new Array<number>(this.totalPages)
        }
        this.materiels=data;
      },err=>{
        console.log(err);
      }
    );
  }
  onDeleteMateriel(m:any) {
    let con=confirm("êtes vous sûr?");
    if (con){
      this.RoomsService.deleteMateriel(m._links.self.href)
        .subscribe(data=>{
          this.chercherMateriels();
        },err => {
          console.log(err);
        })
    }

  }
  onEditMateriel(m: any) {
    let url=m._links.self.href;
    this.router.navigateByUrl("/edit-materiel/"+btoa(url) );
  }
}
