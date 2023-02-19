import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SallesComponent} from "./salles/salles.component";
import {NouvelleSalleComponent} from "./nouvelle-salle/nouvelle-salle.component";
import {EditSalleComponent} from "./edit-salle/edit-salle.component";
import {ReservationsComponent} from "./reservations/reservations.component";
import {NouvelleReservationComponent} from "./nouvelle-reservation/nouvelle-reservation.component";
import {EditReservationComponent} from "./edit-reservation/edit-reservation.component";
import {NouveauMaterielComponent} from "./nouveau-materiel/nouveau-materiel.component";
import {MaterielsComponent} from "./materiels/materiels.component";
import {EditMaterielComponent} from "./edit-materiel/edit-materiel.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "landing-page",
    component:LandingPageComponent
  },{
    path: "edit-materiel/:id",
    component:EditMaterielComponent
  },{
    path: "materiels",
    component:MaterielsComponent
  },{
    path: "nouveau-materiel",
    component:NouveauMaterielComponent
  },{
    path: "salles",
    component:SallesComponent
  },{
    path: "nouvelle-salle",
    component:NouvelleSalleComponent
  },{
    path: "edit-salle/:id",
    component:EditSalleComponent
  },{
    path: "edit-reservation/:id",
    component:EditReservationComponent
  },{
    path: "",redirectTo:"/landing-page",pathMatch:'full'
  },{
    path: "reservations",
    component:ReservationsComponent
  },{
    path: "nouvelle-reservation/:id",
    component:NouvelleReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
