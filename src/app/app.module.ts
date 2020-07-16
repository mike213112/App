import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { PrincipalComponent } from './componentes/principal/principal/principal.component';
import { CarritoComponent } from './componentes/principal/carrito/carrito.component';
import { InventarioComponent } from './componentes/principal/inventario/inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    CarritoComponent,
    InventarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
