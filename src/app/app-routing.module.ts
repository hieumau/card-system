import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {CardCreateComponent} from "./features/card-create/card-create.component";
import {CardDetailComponent} from "./features/card-detail/card-detail.component";
import {CardListComponent} from "./features/card-list/card-list.component";
import {LoginComponent} from "./shared/page/authen/login/login.component";
import {RegisterComponent} from "./shared/page/authen/register/register.component";

const routes: Routes = [
  {
    path: 'add',
    component: CardCreateComponent
  },
  {
    path: 'cards',
    component: CardListComponent
  },
  {
    path: 'cards/:id',
    component: CardDetailComponent
  },
  {
    path: 'cards/:id/edit',
    component: CardCreateComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
