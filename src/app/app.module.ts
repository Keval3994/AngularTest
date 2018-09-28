import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponentComponent } from './Component/header-component/header-component.component';
import { FooterComponentComponent } from './Component/footer-component/footer-component.component';
import { LeftNavComponent } from './Component/left-nav/left-nav.component';
import { MainBodyComponent } from './Component/main-body/main-body.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LeftNavComponent,
    MainBodyComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
