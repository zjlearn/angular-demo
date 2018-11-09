import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CleanRtnListComponent} from './clean-rtn-list/clean-rtn-list.component';

export const routes: Routes = [
  {path: '', component: CleanRtnListComponent},
  {path: 'result/list', component: CleanRtnListComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
