import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloPaginaInicialComponent } from './eliane-componentes/titulo-pagina-inicial/titulo-pagina-inicial.component';
import { ElianeAosComponent } from './eliane-componentes/eliane-aos/eliane-aos/eliane-aos.component';
import { ElianeCriminalComponent } from './eliane-criminal/eliane-criminal.component';
import { ElianeFamiliaComponent } from './eliane-familia/eliane-familia.component';
import { ElianeHomeComponent } from './eliane-home/eliane-home.component';



@NgModule({
  declarations: [
    AppComponent,
    TituloPaginaInicialComponent,
    ElianeAosComponent,
    ElianeCriminalComponent,
    ElianeFamiliaComponent,
    ElianeHomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
