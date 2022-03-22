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
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { VentasFormComponent } from './components/forms/ventas-form/ventas-form.component';
import { ProveedoresFormComponent } from './components/forms/proveedores-form/proveedores-form.component';
import { ClienteFormComponent } from './components/forms/cliente-form/cliente-form.component';
import { ComprasFormComponent } from './components/forms/compras-form/compras-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'home',component: HomeComponent, canActivate: [HomeGuard]},

  { path: 'products', component: ProductListComponent, canActivate: [ProductsGuard]},
  { path: 'products/add', component: ProductFormComponent },
  { path: 'products/edit/:product_id', component: ProductFormComponent},

  { path: 'compras', component: ComprasComponent, canActivate: [ComprasGuard]},
  { path: 'compras/add', component: ComprasFormComponent},
  { path: 'compras/edit/:id', component: ComprasFormComponent},

  { path: 'usuarios', component: UsuariosComponent, canActivate:[UsuariosGuard]},
  { path: 'usuarios/add', component: UserFormComponent},
  { path: 'usuarios/edit/:user_id', component: UserFormComponent},

  { path: 'ventas', component: VentasComponent, canActivate: [VentasGuard]},
  { path: 'ventas/add', component: VentasFormComponent},
  { path: 'ventas/edit/:order_id', component: VentasFormComponent},
  
  { path: 'estadisticas', component: EstadisticasComponent, canActivate: [EstadisticasGuard]},

  { path: 'proveedores', component: ProveedoresComponent, canActivate: [ProveedoresGuard]},
  { path: 'proveedores/add', component: ProveedoresFormComponent},
  { path: 'proveedores/edit/:suplier_id', component: ProveedoresFormComponent},

  { path: 'clientes', component: ClientesComponent, canActivate:[ClientesGuard]},
  { path: 'clientes/add', component: ClienteFormComponent},
  { path: 'clientes/edit/:client_id', component: ClienteFormComponent},

  { path: 'login', component: LoginComponent, canActivate: [LoginGuardGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
