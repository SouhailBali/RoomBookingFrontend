import {Component, OnInit} from '@angular/core';
import {RoomBookingService} from "../services/room-booking.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{
  // @ts-ignore
  private currentId: number;
  private id: string="";
  constructor(private ReservationsServices:RoomBookingService,private router:Router) {

  }

  public reservations:any;
  public length:any;
  public reservation:any;
  public size:number=5;
  public currentPage:number=0;
  public totalPages: number | undefined;
  public totalPage: bigint | undefined;
  public pages: Array<number> | undefined;
  public page: Array<bigint> | undefined;
  ngOnInit(): void {
    this.onGetReservations();
  }
  onGetReservations(){
    this.ReservationsServices.getsReservation(this.currentPage,this.size).subscribe(
      data=>{
        // @ts-ignore
        this.totalPages=data["totalPages"];
        if (this.totalPages != null) {
          this.pages = new Array<number>(this.totalPages)
        }
        this.reservation=data;
      },err=>{
        console.log(err);
      }
    )
  };
  onPageReservation(i: number) {
    this.currentPage=i;
    this.onGetReservations();

  }
  chercherReservations() {

    this.ReservationsServices.getReservationsById(this.currentId,this.currentPage,this.size).subscribe(
      data=>{
console.log(data);
        // @ts-ignore
        this.totalPages=data["totalPages"];
        console.log(this.totalPages);
        if (this.totalPages != null) {
          this.pages = new Array<number>(this.totalPages)
        }
        this.reservation=data;
      },err=>{
        console.log(err);
      }
    );
  }
  onDeleteReservation(s:any) {
    let con=confirm("êtes vous sûr?");
    if (con){
      this.ReservationsServices.deleteReservation(s._links.self.href)
        .subscribe(data=>{
          this.chercherReservations();
        },err => {
          console.log(err);
        })
    }

  }
  onEditReservation(r: any) {
    let url=r._links.self.href;
    this.router.navigateByUrl("/edit-reservation/"+btoa(url) );
  }
  onChercher(form: any) {
    this.currentPage=0;
    this.currentId=form.keyword;
    this.chercherReservations();
  }


}
