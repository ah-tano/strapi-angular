import { Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component';

export const routes: Routes = [
  {
    path: 'myths',
    loadComponent: () => import('./myths/myths.component').then(m => m.MythsComponent)
  },
  {
    path: 'posts/:id',
    loadComponent: () => import('./post/post.component').then(m => m.PostComponent)
  },
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
];
