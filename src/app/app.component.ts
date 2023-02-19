import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RoomBookingFrontV1';
  ngOnInit(): void {
  }

  constructor(public router:Router,public authservice:AuthenticationService) {
  }
  onLogOut() {
    this.authservice.isVisiteur=false;
    this.authservice.isAuthenticated=false;
    this.authservice.userAuthenticated=undefined;
this.router.navigateByUrl("/");
  }

}
