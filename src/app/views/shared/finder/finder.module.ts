import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountryCatalogListingModule } from '../country-catalog-listing/country-catalog-listing.module';
import { SaleFinderModule } from '../toolbar/sale-finder.module';
import { SharedMaterialModule } from '../shared-materials.module';
import { FinderComponent } from './finder/finder.component';
import { AppLoadingModule } from '../app-loading/app-loading.module';



@NgModule({
  declarations: [
    FinderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FinderComponent,
      },
    ]),
    SharedMaterialModule,
    CountryCatalogListingModule,
    SaleFinderModule,
    AppLoadingModule
  ],
  exports: [FinderComponent],
})
export class FinderModule { }
