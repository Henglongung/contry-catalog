import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../shared-materials.module';
import { SearchToolbarComponent } from './search-toolbar/search-toolbar.component';



@NgModule({
  declarations: [
    SearchToolbarComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    SharedMaterialModule
  ],
  exports: [SearchToolbarComponent]
})
export class SearchToolbarModule { }
