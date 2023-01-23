import {Component, OnInit} from '@angular/core';
import {Salle} from "../model/salle.model";
import {Reservation} from "../model/reservation.model";
import {RoomBookingService} from "../services/room-booking.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouvelle-reservation',
  templateUrl: './nouvelle-reservation.component.html',
  styleUrls: ['./nouvelle-reservation.component.css']
})
export class NouvelleReservationComponent implements OnInit{
  public currentSalle: Salle | undefined;
  public currentReservation: Reservation | undefined;
  public mode: number=1;
  private url: string | undefined;

  constructor(private roomBookingService:RoomBookingService,private activatedRoute:ActivatedRoute, public router:Router) {
  }
  ngOnInit() :void{
    this.url=atob(this.activatedRoute.snapshot.params['id'])
    this.roomBookingService.getSalle(this.url).subscribe(data=>{
      this.currentSalle=data;
      console.log(this.currentSalle)
    },err => {
      console.log(err);
    })
  }

  onSaveReservation(data: any) {
    console.log(data);
    this.roomBookingService.saveReservation(this.roomBookingService.host+"/reservationlist",data)
      .subscribe(res=>{
        console.log(data);
        this.mode=2;
//this.router.navigateByUrl("/salles");
      },err => {
        console.log(err);
      })
  }
}
