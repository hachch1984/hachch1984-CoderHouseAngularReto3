import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteMantenimientoComponent } from './pages/cliente-mantenimiento/cliente-mantenimiento.component';
import { ClienteTablaComponent } from './components/cliente-tabla/cliente-tabla.component';
import { ClienteFormularioComponent } from './components/cliente-formulario/cliente-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClienteMantenimientoComponent,
    ClienteTablaComponent,
    ClienteFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
