import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { TrabajoFormComponent } from './trabajo-form/trabajo-form.component';

import { EscuelaIndexComponent } from './escuela-index/escuela-index.component';
import { EscuelaFormComponent } from './escuela-form/escuela-form.component';

import { FaculIndexComponent } from './facul-index/facul-index.component';
import { FaculFormComponent } from './facul-form/facul-form.component';

import { BuscadorIndexComponent } from './buscador-index/buscador-index.component';

import { IndiceIndexComponent } from './indice-index/indice-index.component';
import { DatosIndexComponent } from './datos-index/datos-index.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products',  component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'shipping', component: ShippingComponent },

  { path: 'clienteindex',  component: ClienteIndexComponent },
  { path: 'clienteform',  component: ClienteFormComponent },
  { path: 'clienteform/:id',  component: ClienteFormComponent },
  { path: 'trabajoform',  component: TrabajoFormComponent },
  { path: 'trabajoform/:id',  component: TrabajoFormComponent },

  { path: 'escuela',  component: EscuelaIndexComponent },
  { path: 'escuelaform',  component: EscuelaFormComponent },
  { path: 'escuelaform/:id',  component: EscuelaFormComponent },

  { path: 'facultad',  component: FaculIndexComponent },
  { path: 'faculform',  component: FaculFormComponent },
  { path: 'faculform/:id',  component: FaculFormComponent },

  { path: 'buscador',  component: BuscadorIndexComponent },

  { path: 'indice',  component: IndiceIndexComponent },
  
  { path: 'datospersonales',  component: DatosIndexComponent },


  

  
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ClienteIndexComponent,
    ClienteFormComponent,
    TrabajoFormComponent,
    EscuelaIndexComponent,
    FaculIndexComponent,
    EscuelaFormComponent,
    FaculFormComponent,
    BuscadorIndexComponent,
    IndiceIndexComponent,
    DatosIndexComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
