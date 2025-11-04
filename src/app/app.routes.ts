import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('../app/pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'form',
        loadComponent: () => import('../app/pages/form/form.component').then(m => m.FormComponent)
    }
];
