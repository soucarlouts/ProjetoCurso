import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./componentes/pages/home/home.component";
import { AulasComponent } from "./componentes/pages/aulas/aulas.component";
import { VideoComponent } from "./componentes/pages/video/video.component";
import { LoginPageComponent } from './componentes/login-page/login-page.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aulas", component: AulasComponent },
  { path: 'aulas/:id', component: VideoComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
