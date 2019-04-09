import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { MatSnackBarModule, MatListModule, MatExpansionModule, MatChipsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartComponent } from './start/start.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import {MatSliderModule} from '@angular/material/slider';
import { AnswerChatComponent } from './answer-chat/answer-chat.component';
import { RegisterComponent } from './register/register.component';
import { ShowComponent } from './show/show.component';

const dialogMock = {
  close: () => {}
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RecoverPasswordComponent,
    ProductsComponent,
    AccountComponent,
    CartComponent,
    NotFoundComponent,
    StartComponent,
    SearchResultsComponent,
    ShowResultComponent,
    AddToCartComponent,
    AnswerChatComponent,
    RegisterComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatBadgeModule,
    MatListModule,
    MatExpansionModule,
    MatSliderModule,
    MatChipsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    LoginComponent,
    AccountComponent,
    CartComponent,
    SearchResultsComponent,
    ShowResultComponent,
    AddToCartComponent,
    RecoverPasswordComponent,
    RegisterComponent
  ],
  providers: [
    {provide: MatDialogRef, useValue: dialogMock},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
