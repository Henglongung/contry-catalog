import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CountryCatalogListingModule } from '../country-catalog-listing/country-catalog-listing.module';
import { HelpersModule } from "../helpers/helpers.module";
import { SearchToolbarModule } from '../search-toolbar/search-toolbar.module';
import { SharedMaterialModule } from "../shared-materials.module";
import { GetSaleSearchArgsPipe } from './pipes';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [ToolbarComponent],
    imports: [
        CommonModule,
        RouterModule,
        SharedMaterialModule,
        CountryCatalogListingModule,
        SearchToolbarModule,
        ReactiveFormsModule,
    ],
    exports: [ToolbarComponent],
    providers: [DatePipe]

})
export class SaleFinderModule {
}
