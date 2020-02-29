import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloPaginaInicialComponent } from './eliane-componentes/titulo-pagina-inicial/titulo-pagina-inicial.component';
import { ElianeAosComponent } from './eliane-componentes/eliane-aos/eliane-aos/eliane-aos.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloPaginaInicialComponent,
    ElianeAosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
