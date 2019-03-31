import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { FinishdownloadComponent } from './finishdownload/finishdownload.component';
import { DevelopersComponent } from './developers/developers.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'download/:version', component: FinishdownloadComponent},
  {path: 'developers/:list', component: DevelopersComponent},
  /*{path: 'finish-delivery/:id', component: FinishDeliveryComponent},
  {path: 'products', component: ShowProductsComponent},
  {path: 'about', component: InfoComponent},
  {path: '**', component: PageNotFoundComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
