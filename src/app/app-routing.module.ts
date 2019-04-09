import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartComponent } from './start/start.component';
import { CartComponent } from './cart/cart.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'is', redirectTo: '/start', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'show/:page', component: ShowComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
