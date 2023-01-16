import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoomBookingService} from "../services/room-booking.service";
import {Router} from "@angular/router";
import * as url from "url";

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit{
  private currentKeyword: string="";
  constructor(private RoomsService:RoomBookingService,private router:Router) {
  }
  public salles:any;
  public size:number=5;
  public currentPage:number=0;
  public totalPages: number | undefined;
  public pages: Array<number> | undefined;
  ngOnInit(): void {

  }

  onGetSalles() {
    this.RoomsService.getSalles(this.currentPage,this.size).subscribe(
      data=>{

        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        if (this.totalPages != null) {
          this.pages = new Array<number>(this.totalPages)
        }
        this.salles=data;
      },err=>{
        console.log(err);
      }
    );
  }

  onPageSalle(i: number) {
    this.currentPage=i;
    this.chercherSalles();

  }
onChercher(form:any){
this.currentPage=0;
  this.currentKeyword=form.keyword;
  this.chercherSalles();
}
  chercherSalles() {

    this.RoomsService.getSallesByDesignation(this.currentKeyword,this.currentPage,this.size).subscribe(
      data=>{

        // @ts-ignore
        this.totalPages=data["page"].totalPages;
        if (this.totalPages != null) {
          this.pages = new Array<number>(this.totalPages)
        }
        this.salles=data;
      },err=>{
        console.log(err);
      }
    );
  }

  onDeleteSalle(s:any) {
    let con=confirm("êtes vous sûr?");
    if (con){
      this.RoomsService.deleteSalle(s._links.self.href)
        .subscribe(data=>{
this.chercherSalles();
        },err => {
console.log(err);
        })
    }

  }

  onEditSalle(s: any) {
   let url=s._links.self.href;
this.router.navigateByUrl("/edit-salle/"+btoa(url) );
  }

  onReserveSalle(s: any) {
    let url=s._links.self.href;
    this.router.navigateByUrl("/reservations/"+btoa(url));
  }
}
