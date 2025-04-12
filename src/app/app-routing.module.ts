import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { InfoComponent } from './pages/info/info.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { Acerca2Component } from './pages/acerca2/acerca2.component';
import { Acerca3Component } from './pages/acerca3/acerca3.component';
import { ComparaComponent } from './pages/compara/compara.component';
import { Login2Component } from './pages/login2/login2.component';
const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'login2', component:  Login2Component},
  { path: 'about-me', component:  AboutMeComponent},
  { path: 'info', component:  InfoComponent},
  { path: 'about-us', component:  AboutUsComponent},
  { path: 'about2', component:  Acerca2Component},
  { path: 'about3', component:  Acerca3Component},
  { path: 'compara', component: ComparaComponent},
  //esto establece la ruta inicial predeterminada
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
