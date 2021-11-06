import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagementMainComponent } from './pages/file-management-main/file-management-main.component';
import { FileUploadDisplayComponent } from './pages/file-upload-display/file-upload-display.component';
import { GraphComponent } from './pages/graph/graph.component';
import { MemoryUsageComponent } from './pages/memory-usage/memory-usage.component';
import { ScreenshootsComponent } from './pages/screenshoots/screenshoots.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: FileManagementMainComponent,
    children: [
      {
        path: 'upload-display-files',
        component: FileUploadDisplayComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'graph',
        component: GraphComponent,
      },
      {
        path: 'memory-usage',
        component: MemoryUsageComponent,
      },
      {
        path: 'screenshoots',
        component: ScreenshootsComponent,
      },
      {
        path: '**',
        redirectTo: 'graph',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileManagementRoutingModule {}
