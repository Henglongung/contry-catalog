import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../shared-materials.module';
import { AppLoadingComponent } from './app-loading/app-loading.component';

@NgModule({
  declarations: [
    AppLoadingComponent
  ],
  exports: [
    AppLoadingComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
  ]
})
export class AppLoadingModule { }
