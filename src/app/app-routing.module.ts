import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { SinglecomponentComponent } from './pages/district/singlecomponent/singlecomponent.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
  path:'home',component:HomeComponent
  },
   {
    path:'district',component:DistrictComponent
   },
   {
    path:'signup',component:SignupComponent
   },
   {
    path:'contact',component:ContactComponent
   },
   {
    path:'single',component:SinglecomponentComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
