import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { ProgressComponent } from './progress/progress.component';
import { FileTableComponent } from './file-table/file-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    DropzoneComponent,
    ProgressComponent,
    FileTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
 
  ],
  exports:[
    DropzoneComponent,
    ProgressComponent,
    FileTableComponent,
  ],
})
export class SharedModule { }
