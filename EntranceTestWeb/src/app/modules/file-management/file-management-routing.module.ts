import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileManagementMainComponent} from './pages/file-management-main/file-management-main.component';
import {FileUploadDisplayComponent} from './pages/file-upload-display/file-upload-display.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: FileManagementMainComponent,
    children: [
        {
            path: 'upload-display-files',
            component: FileUploadDisplayComponent
        },
        {
          path: 'settings',
          component: SettingsComponent
      },
        {
            path: '**',
            redirectTo: 'upload-display-files'
        },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagementRoutingModule { }
