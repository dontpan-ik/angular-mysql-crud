import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


import { ProductsService } from './services/products.service';
import { LoginService } from './services/login.service';

import { HomeComponent } from './components/home/home.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { HeaderComponent } from './components/common/header/header.component';
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



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductFormComponent,
    ProductListComponent,
    PageNotFoundComponent,
    HomeComponent,
    VentasComponent,
    MenuComponent,
    ComprasComponent,
    ClientesComponent,
    EstadisticasComponent,
    UsuariosComponent,
    ProveedoresComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsService,
    LoginService,
    LoginGuardGuard,
    HomeGuard,
    ProductsGuard,
    ComprasGuard,
    VentasGuard,
    ClientesGuard,
    UsuariosGuard,
    EstadisticasGuard,
    ProveedoresGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
