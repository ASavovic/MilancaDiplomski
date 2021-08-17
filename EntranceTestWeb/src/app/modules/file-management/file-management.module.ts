import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagementRoutingModule } from './file-management-routing.module';
import { FileManagementMainComponent } from './pages/file-management-main/file-management-main.component';
import { FileUploadDisplayComponent } from './pages/file-upload-display/file-upload-display.component';
import {SharedModule} from "../../shared/shared.module";
import { SettingsComponent } from './pages/settings/settings.component'


@NgModule({
  declarations: [
    FileManagementMainComponent,
    FileUploadDisplayComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FileManagementRoutingModule,
    SharedModule,
  ]
})
export class FileManagementModule { }
