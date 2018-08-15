import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './shared/navigation/navigation.component';
import { DatatabledemoComponent } from 'src/app/datatabledemo/datatabledemo.component';

// Route config let's you map routes to components
const routes: Routes = [
    {
        path: 'navigation',
        component: NavigationComponent,
    },

    {
        path: 'datatable',
        component: DatatabledemoComponent,
    },
    // {
    //     path: '',
    //     redirectTo: '/',
    //     pathMatch: 'full',
    // },
]

export const appRouterModule = RouterModule.forRoot(routes);
