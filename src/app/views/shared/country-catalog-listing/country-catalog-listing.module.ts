import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCatalogComponent } from './country-catalog-listing/country-catalog-listing.component';
import { SharedMaterialModule } from '../shared-materials.module';
import { HelpersModule } from '../helpers/helpers.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CountryCatalogComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    HelpersModule,
    RouterModule
  ],
  exports: [CountryCatalogComponent]
})
export class CountryCatalogListingModule { }
