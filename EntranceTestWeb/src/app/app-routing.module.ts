import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'file-management', pathMatch: 'full' },
  {
    path: 'file-management',
    canActivate: [],
    canLoad: [],
    loadChildren: () => import('./modules/file-management/file-management.module').then(m => m.FileManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
