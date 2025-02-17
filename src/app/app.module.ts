import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { SkillsComponent } from './skills/skills.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    SobremiComponent,
    SkillsComponent,
    CurriculumComponent,
    PortfolioComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
