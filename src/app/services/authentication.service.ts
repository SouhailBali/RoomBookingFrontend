import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private users=[
  {username:'admin',password:'1234',roles:['ADMIN','USER']},
  {username:'souhail',password:'1234',roles:['USER']},
  {username:'mehdi',password:'1234',roles:['USER']}
];
  public isAuthenticated: boolean = false;
  public isVisiteur: boolean = false;
  public userAuthenticated:any;
  constructor() { }
  public login(username:string,password:string){
let user;
this.users.forEach(u=>{
  if (u.username==username && u.password==password){
    user=u;
  }
});
if(user){
  this.isVisiteur=true;
  this.isAuthenticated=true;
  this.userAuthenticated=user;
}else {
  this.isVisiteur=false;
  this.isAuthenticated=false;
  this.userAuthenticated=undefined;
}
  }
  public isAdmin(){
    if (this.userAuthenticated){
      if (this.userAuthenticated.roles.indexOf('ADMIN')>-1){
        return true;
      }
    }
    return false;
      }
}
