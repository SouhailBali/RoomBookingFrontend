import {Component, OnInit} from '@angular/core';
import {Salle} from "../model/salle.model";
import {Materiel} from "../model/Materiel.model";
import {RoomBookingService} from "../services/room-booking.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-materiel',
  templateUrl: './nouveau-materiel.component.html',
  styleUrls: ['./nouveau-materiel.component.css']
})
export class NouveauMaterielComponent implements OnInit{
  public currentMateriel: Materiel | undefined;
  public mode: number=1;
  constructor(private roomBookingService:RoomBookingService, public router:Router){

  }
  ngOnInit(): void {
  }

  onSaveMateriel(data: any) {
    this.roomBookingService.saveMateriel(this.roomBookingService.host+"/materiels",data)
      .subscribe(res=>{
        this.mode=2
      },err=>{
        console.log(err);
      }

    )
  }
}
