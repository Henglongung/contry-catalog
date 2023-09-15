import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../shared-materials.module';
import { AuxDialogComponent } from './aux-dialog/aux-dialog.component';



@NgModule({
  declarations: [AuxDialogComponent],
  exports: [AuxDialogComponent],
  imports: [
    CommonModule,
    SharedMaterialModule
  ]
})
export class AuxDialogModule { }
