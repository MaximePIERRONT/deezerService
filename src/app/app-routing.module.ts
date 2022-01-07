import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {NotFoundError} from "rxjs";

const routes: Routes = [
  {path: 'url1', component: Carre},
  {
    path: 'url1', component: Carre,
    children: [
      {path:'tata', component:Tata}
    ]
  },
  {path: '/', redirectTo: '/url1', pathMatch: 'full'}
  {path: '**', component: NotFound}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
