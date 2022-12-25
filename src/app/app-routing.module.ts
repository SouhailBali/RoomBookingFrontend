import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SallesComponent} from "./salles/salles.component";
import {NouvelleSalleComponent} from "./nouvelle-salle/nouvelle-salle.component";
import {EditSalleComponent} from "./edit-salle/edit-salle.component";

const routes: Routes = [
  {
    path: "salles",
    component:SallesComponent
  },{
    path: "nouvelle-salle",
    component:NouvelleSalleComponent
  },{
    path: "edit-salle/:id",
    component:EditSalleComponent
  },{
    path: "",redirectTo:"/salles",pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
