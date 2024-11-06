import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ConactComponent } from './component/conact/conact.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', title:'Home', component:HomeComponent},
  {path:'about', title:'Home', component:AboutComponent},
  {path:'contact', title:'Home', component:ConactComponent},
  {path:'**', title:'Home', component:HomeComponent},


];
