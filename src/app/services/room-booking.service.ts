import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Salle} from "../model/salle.model";
import {Reservation} from "../model/reservation.model";

@Injectable({
  providedIn: 'root'
})
export class RoomBookingService {
public host:string="http://localhost:8080"
  constructor(private httpClient:HttpClient) { }
  public getSalles(page:number,size:number){
    return this.httpClient.get(this.host+"/salles?page="+page+"&size="+size);
  }
  public getReservations(page:number,size:number){
    return this.httpClient.get(this.host+"/reservations?page="+page+"&size="+size);
  }
  public getsReservation(page:number,size:number){
    return this.httpClient.get(this.host+"/reservationlist?page="+page+"&size="+size);
  }
  public getSallesByDesignation(mc:string,page:number,size:number){
    return this.httpClient.get(this.host+"/salles/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }
  public getReservationsById(mc:number,page:number,size:number){
    return this.httpClient.get(this.host+"/reservationlist/"+mc+"?page="+page+"&size="+size);
  }
  public deleteSalle(url:any){
    return this.httpClient.delete(url);
}
public deleteReservation(url:any){
    return this.httpClient.delete(url);
  }
  public saveSalle(url:any,data:any):Observable<Salle>{
    // @ts-ignore
    return this.httpClient.post<Salle>(url,data);
  }
  public saveReservation(url:any,data:any):Observable<Reservation>{
    // @ts-ignore
    return this.httpClient.post<any>(url,data);
  }
  public getSalle(url:any):Observable<Salle>{
  // @ts-ignore
    return this.httpClient.get<Salle>(url);
  }
  public getReservation(url:any):Observable<Reservation>{
    // @ts-ignore
    return this.httpClient.get<Reservation>(url);
  }
  public updateSalle(url:any,data:any){
    return this.httpClient.put(url,data);
  }
  public updateReservation(url:any,data:any){
    return this.httpClient.put(url,data);
  }
}
