import {Component, OnInit} from '@angular/core';
import {Materiel} from "../model/Materiel.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomBookingService} from "../services/room-booking.service";

@Component({
  selector: 'app-edit-materiel',
  templateUrl: './edit-materiel.component.html',
  styleUrls: ['./edit-materiel.component.css']
})
export class EditMaterielComponent implements OnInit{
  public currentMateriel: Materiel | undefined;
  private url: string | undefined;
  public mode: number=2;

  constructor(public router:Router,private activatedRoute:ActivatedRoute,public RoomsService:RoomBookingService) {
  }

  ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params['id'])
    this.RoomsService.getMateriel(this.url).subscribe(data=>{
      this.currentMateriel=data;
    },err => {
      console.log(err);
    })
  }
  onUpdateMateriel(value: any) {
    this.RoomsService.updateMateriel(this.url,value).subscribe(data=>{
      this.mode=1;
    },err => {
      console.log(err);
    })
  }

}
