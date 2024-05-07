import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./componentes/pages/home/home.component";
import {AulasComponent} from "./componentes/pages/aulas/aulas.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aulas", component: AulasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
