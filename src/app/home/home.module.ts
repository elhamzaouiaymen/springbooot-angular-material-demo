import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'

import { ProcedureDetailComponent } from './procedure-detail/procedure-detail.component';
import { ProcedureUpdateComponent } from './procedure-update/procedure-update.component';
import { ProcedureVersionsComponent } from './procedure-versions/procedure-versions.component';
import { ProcedureListComponent } from './procedure-list/procedure-list.component';

import { MatTableModule, MatSelectModule, MatInputModule } from '@angular/material'
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [ProcedureListComponent,
    ProcedureDetailComponent,
    ProcedureUpdateComponent,
    ProcedureVersionsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class HomeModule { }
