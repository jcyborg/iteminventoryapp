import { Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ItemsComponent } from './items/items.component';

export const routes: Routes = [
    { path: '', component: UploadComponent }, 
    { path: 'upload', component: UploadComponent },
    { path: 'items', component: ItemsComponent },
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
];
