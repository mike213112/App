import { InventarioComponent } from './componentes/principal/inventario/inventario.component';
import { CarritoComponent } from './componentes/principal/carrito/carrito.component';
import { PrincipalComponent } from './componentes/principal/principal/principal.component';
import { RegisterComponent } from './componentes/user/register/register.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/principal', component: PrincipalComponent },
  { path: 'user/carrito', component: CarritoComponent },
  { path: 'user/inventario', component: InventarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
