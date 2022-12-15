import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import {ShareModule} from "ngx-sharebuttons";
import {ShareButtonModule} from "ngx-sharebuttons/button";
import {ShareIconsModule} from "ngx-sharebuttons/icons";
import {NetworkingSpinnerComponent} from "./component/networking-spinner/networking-spinner.component";
import {MaterialElevationDirective} from "./directive/material-elevation.directive";
import {LoginComponent} from "./page/authen/login/login.component";
import {RegisterComponent} from "./page/authen/register/register.component";
import {IndexComponent} from "./page/index/index.component";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    MaterialElevationDirective,
    NetworkingSpinnerComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    MaterialElevationDirective,
    NetworkingSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    RouterLink,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    ShareModule,
    ShareButtonModule,
    ShareIconsModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  providers: []
})
export class SharedModule {
}
