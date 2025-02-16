import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'project',
        loadChildren: () => import('./project/user.module').then(m => m.UserModule)
    },
    {
        path: '',
        redirectTo: 'project',
        pathMatch: 'full'
    }
];
