import {ClipboardModule} from "@angular/cdk/clipboard";
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserModule} from "@angular/platform-browser";
import {ShareButtonModule} from "ngx-sharebuttons/button";
import {SharedModule} from "../../shared/shared.module";

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserAddComponent } from './component/user-add/user-add.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserAddComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    ClipboardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    FormsModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSelectModule,
    ShareButtonModule
  ],
  providers: [

  ]
})
export class UserModule {
}
