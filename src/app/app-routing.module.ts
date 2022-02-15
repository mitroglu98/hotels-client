import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/presentation/contact-us/contact-us.component';
import { HomeComponent } from './components/presentation/home/home.component';
import { HotelsComponent } from './components/presentation/hotels/hotels.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactUsComponent},
  {path:'hotels', component: HotelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
