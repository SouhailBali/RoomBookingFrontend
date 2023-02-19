import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SallesComponent } from './salles/salles.component';
import { NouvelleSalleComponent } from './nouvelle-salle/nouvelle-salle.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { EditSalleComponent } from './edit-salle/edit-salle.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { NouvelleReservationComponent } from './nouvelle-reservation/nouvelle-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { NouveauMaterielComponent } from './nouveau-materiel/nouveau-materiel.component';
import { MaterielsComponent } from './materiels/materiels.component';
import { EditMaterielComponent } from './edit-materiel/edit-materiel.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SallesComponent,
    NouvelleSalleComponent,
    EditSalleComponent,
    ReservationsComponent,
    NouvelleReservationComponent,
    EditReservationComponent,
    NouveauMaterielComponent,
    MaterielsComponent,
    EditMaterielComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
