import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './shared/navigation/navigation.component';

// Route config let's you map routes to components
const routes: Routes = [
    {
        path: 'navigation',
        component: NavigationComponent,
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
    },
]

export const appRouterModule = RouterModule.forRoot(routes);
