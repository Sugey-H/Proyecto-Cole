import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'us',
    loadComponent: () => import('./us/us.page').then( m => m.UsPage)
  },
  {
    path: 'agenda',
    loadComponent: () => import('./agenda/agenda.page').then( m => m.AgendaPage)
  },
  {
    path: 'photos',
    loadComponent: () => import('./photos/photos.page').then( m => m.PhotosPage)
  },
  {
    path: 'x',
    loadComponent: () => import('./x/x.page').then( m => m.XPage)
  },

];
