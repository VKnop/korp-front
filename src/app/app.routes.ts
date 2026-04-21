import { Routes } from '@angular/router';
import { ListComponent } from './components/features/list/list.component';

export const routes: Routes = [
  {
    path:'',
    component: ListComponent
  },{
    path: 'create-product',
    loadComponent: () => import('./components/features/create/create.component').then(m => m.CreateComponent),
  }
];
