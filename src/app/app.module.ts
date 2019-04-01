import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { MatDialogModule, MatDialogRef, MatSnackBar, MatSnackBarModule, MatBadgeModule } from '@angular/material';
import { FinishdownloadComponent } from './finishdownload/finishdownload.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { DevelopersComponent } from './developers/developers.component';
import { CatalogueComponent } from './catalogue/catalogue.component';


//HTTP 
import { HttpClientModule } from '@angular/common/http'
import { ProductsService } from './services/products.service';
import { DataPipe } from './services/data.pipe';


const dialogMock = {
  close: () => {}
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    FinishdownloadComponent,
    LoginComponent,
    AccountComponent,
    CartComponent,
    UpdateAccountComponent,
    DeleteAccountComponent,
    DevelopersComponent,
    CatalogueComponent,
    DataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatExpansionModule,
    MatBadgeModule,
    HttpClientModule
  ],
  entryComponents: [
    DownloadComponent,
    AccountComponent,
    CartComponent,
    LoginComponent,
    UpdateAccountComponent,
    DeleteAccountComponent
  ],
  providers: [
    ProductsService,
    {provide: MatDialogRef, useValue: dialogMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
