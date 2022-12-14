import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Interceptors} from "./core/interceptor/interceptors";
import {SharedModule} from "./shared/shared.module";
import { CardListComponent } from './features/card-list/card-list.component';
import { CardDetailComponent } from './features/card-detail/card-detail.component';
import { CardCreateComponent } from './features/card-create/card-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardDetailComponent,
    CardCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    FontAwesomeModule,
    MatToolbarModule
  ],
  providers: [
    ...Interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
