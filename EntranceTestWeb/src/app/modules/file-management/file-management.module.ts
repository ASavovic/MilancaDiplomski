import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagementRoutingModule } from './file-management-routing.module';
import { FileManagementMainComponent } from './pages/file-management-main/file-management-main.component';
import { FileUploadDisplayComponent } from './pages/file-upload-display/file-upload-display.component';
import {SharedModule} from "../../shared/shared.module";
import { SettingsComponent } from './pages/settings/settings.component';
import { GraphComponent } from './pages/graph/graph.component';
import { MemoryUsageComponent } from './pages/memory-usage/memory-usage.component';
import { ScreenshootsComponent } from './pages/screenshoots/screenshoots.component'
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RealTimeGraphComponent } from './pages/real-time-graph/real-time-graph.component';


@NgModule({
  declarations: [
    FileManagementMainComponent,
    FileUploadDisplayComponent,
    SettingsComponent,
    GraphComponent,
    MemoryUsageComponent,
    ScreenshootsComponent,
    RealTimeGraphComponent
  ],
  imports: [
    CommonModule,
    FileManagementRoutingModule,
    SharedModule,
    DateTimePickerModule,
    NgApexchartsModule,
    NgxChartsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class FileManagementModule { }
