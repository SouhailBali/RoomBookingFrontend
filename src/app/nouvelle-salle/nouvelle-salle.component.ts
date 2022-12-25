import {Component, OnInit} from '@angular/core';
import {RoomBookingService} from "../services/room-booking.service";
import {Router} from "@angular/router";
import {Salle} from "../model/salle.model";

@Component({
  selector: 'app-nouvelle-salle',
  templateUrl: './nouvelle-salle.component.html',
  styleUrls: ['./nouvelle-salle.component.css']
})
export class NouvelleSalleComponent implements OnInit{
public currentSalle: Salle | undefined;
  public mode: number=1;
  constructor(private roomBookingService:RoomBookingService, public router:Router) {

  }

  ngOnInit(): void {
  }

  onSaveSalle(data: any) {
    this.roomBookingService.saveSalle(this.roomBookingService.host+"/salles",data)
      .subscribe(res=>{
        this.mode=2;
//this.router.navigateByUrl("/salles");
      },err => {
        console.log(err);
      })

  }


}
