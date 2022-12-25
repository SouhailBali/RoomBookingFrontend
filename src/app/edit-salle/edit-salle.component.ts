import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RoomBookingService} from "../services/room-booking.service";
import {Salle} from "../model/salle.model";

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent implements OnInit{
  public currentSalle: Salle | undefined;
  private url: string | undefined;
  public mode: number=2;
constructor(public router:Router,private activatedRoute:ActivatedRoute,private RoomsService:RoomBookingService) {
}

  ngOnInit(): void {
  this.url=atob(this.activatedRoute.snapshot.params['id'])
  this.RoomsService.getSalle(this.url).subscribe(data=>{
    this.currentSalle=data;
  },err => {
    console.log(err);
  })
  }

  onUpdateSalle(value: any) {
    this.RoomsService.updateSalle(this.url,value).subscribe(data=>{
this.mode=1;
    },err => {
console.log(err);
    })
  }
}
