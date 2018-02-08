import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatListModule
} from '@angular/material';

const COMPONENTS = [
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatListModule
];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS
})
export class MaterialImportsModule { }
