import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{
constructor(public authenticationservice:AuthenticationService,private router:Router) {
}

  ngOnInit(): void {

    }

  onLogin(dataForm: any) {
    this.authenticationservice.login(dataForm.username,dataForm.password);
    if(this.authenticationservice.isAuthenticated){
      this.router.navigateByUrl('/salles');
    }
  }

}
