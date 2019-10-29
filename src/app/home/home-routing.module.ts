import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedureDetailComponent } from './procedure-detail/procedure-detail.component';
import { ProcedureUpdateComponent } from './procedure-update/procedure-update.component';
import { ProcedureVersionsComponent } from './procedure-versions/procedure-versions.component';
import { ProcedureListComponent } from './procedure-list/procedure-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ProcedureListComponent},
  {path: 'procedure/update/:id', component: ProcedureUpdateComponent},
  {path: 'procedure/:id', component: ProcedureDetailComponent},
  {path: 'procedure/:id/versions', component: ProcedureVersionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
