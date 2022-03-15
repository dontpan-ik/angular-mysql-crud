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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home',component: HomeComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'products/add', component: ProductFormComponent },
  { path: 'products/edit/:product_id', component: ProductFormComponent},
  { path: 'compras', component: ComprasComponent},
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
