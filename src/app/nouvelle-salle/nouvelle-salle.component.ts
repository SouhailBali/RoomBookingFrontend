import {Component, OnInit} from '@angular/core';
import {RoomBookingService} from "../services/room-booking.service";
import {Router} from "@angular/router";
import {Salle} from "../model/salle.model";
import {Reservation} from "../model/reservation.model";
import {HttpRequest} from "@angular/common/http";
import {ImagesPushService} from "../services/images-push.service";

@Component({
  selector: 'app-nouvelle-salle',
  templateUrl: './nouvelle-salle.component.html',
  styleUrls: ['./nouvelle-salle.component.css']
})
export class NouvelleSalleComponent implements OnInit{
public currentSalle: Salle | undefined;
  public mode: number=1;
  private selectedFiles: any;
  private currentFileUpload: any;
  constructor(private roomBookingService:RoomBookingService, public router:Router,private imagesPushService:ImagesPushService) {

  }

  ngOnInit(): void {
  }

  onSaveSalle(data: any) {
    this.currentFileUpload=this.selectedFiles.item(0);
    data['photoName']=this.selectedFiles.item(0).name;
    console.log(data);
    this.roomBookingService.saveSalle(this.roomBookingService.host+"/salles",data)
      .subscribe(res=>{
        this.mode=2;
        this.imagesPushService.pushFileToStorage(this.selectedFiles.item(0)).subscribe(rest => {
          console.log(rest);
          // if (event.type === HttpEventType.UploadProgress) {
          //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
          // } else if (event instanceof HttpResponse) {
          //   console.log('File is completely uploaded!');
          // }
        });
//this.router.navigateByUrl("/salles");
      },err => {
        console.log(err);
      })

  }


  onSelectedFile($event: Event) {
    // @ts-ignore
    this.selectedFiles=event.target.files;
    console.log(this.selectedFiles);
  }
}
