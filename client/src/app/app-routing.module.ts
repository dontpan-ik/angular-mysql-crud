import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
//import { MenuComponent } from './components/common/menu/menu.component';
import { ComprasComponent } from './components/compras/compras.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { HomeGuard } from './guards/home.guard';
import { ProductsGuard } from './guards/products.guard';
import { ComprasGuard } from './guards/compras.guard';
import { VentasGuard } from './guards/ventas.guard';
import { ClientesGuard } from './guards/clientes.guard'
import { UsuariosGuard } from './guards/usuarios.guard'
import { EstadisticasGuard } from './guards/estadisticas.guard'
import { ProveedoresGuard } from './guards/proveedores.guard'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'home',component: HomeComponent, canActivate: [HomeGuard]},
  { path: 'products', component: ProductListComponent, canActivate: [ProductsGuard]},
  { path: 'products/add', component: ProductFormComponent },
  { path: 'products/edit/:product_id', component: ProductFormComponent},
  { path: 'compras', component: ComprasComponent, canActivate: [ComprasGuard]},
  { path: 'usuarios', component: UsuariosComponent, canActivate:[UsuariosGuard]},
  { path: 'estadisticas', component: EstadisticasComponent, canActivate: [EstadisticasGuard]},
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [ProveedoresGuard]},
  { path: 'ventas', component: VentasComponent, canActivate: [VentasGuard]},
  { path: 'clientes', component: ClientesComponent, canActivate:[ClientesGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
