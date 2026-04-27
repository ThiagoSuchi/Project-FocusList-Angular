import { Routes } from '@angular/router';
import { Today } from './screens/today/today';

export const routes: Routes = [
    {
        path: '',
        component: Today
    },
    {
        path: 'my-profile',
        loadComponent: () => import('./screens/my-profile/my-profile').then(m => m.MyProfile)
    }
];
