import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RoomBookingService} from "../services/room-booking.service";
import {Reservation} from "../model/reservation.model";

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit{
  public currentReservation: Reservation | undefined;
  private url: string | undefined;
  public mode: number=2;
  constructor(public router:Router,private activatedRoute:ActivatedRoute,private RoomsService:RoomBookingService) {
  }

  ngOnInit(): void {
    this.url=this.activatedRoute.snapshot.params['id']
    this.RoomsService.getReservation("http://localhost:8080/reservationlist/"+this.url).subscribe(data=>{

      // @ts-ignore
      this.currentReservation=data["content"][0];
      console.log(this.currentReservation)
    },err => {
      console.log(err);
    })
  }

  onUpdateReservation(value: any)

  {
    console.log(value)
    this.RoomsService.updateReservation("http://localhost:8080/reservationlist/"+this.url,value).subscribe(data=>{
    this.mode=1;
  },err => {
    console.log(err);
  })
  }
}
