import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuxDialogModule } from '../aux-dialog/aux-dialog.module';
import { HelpersModule } from '../helpers/helpers.module';
import { SharedMaterialModule } from '../shared-materials.module';
import { CountryCatalogDialogComponent } from './country-catalog-dialog/country-catalog-dialog.component';



@NgModule({
  declarations: [
    CountryCatalogDialogComponent
  ],
  exports: [CountryCatalogDialogComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    HelpersModule,
    AuxDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountryCatalogDialogComponent
      }
    ])
  ]
})
export class CountryCatalogDialogModule { }
