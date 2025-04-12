import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './pages/info/info.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { Acerca2Component } from './pages/acerca2/acerca2.component';
import { Acerca3Component } from './pages/acerca3/acerca3.component';
import { Login2Component } from './pages/login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Asegúrate de agregar el componente Header aquí
    FooterComponent,
    LoginComponent,
    AboutMeComponent,
    AboutUsComponent,
    Acerca2Component,
    InfoComponent,
    Acerca3Component,
    Login2Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
