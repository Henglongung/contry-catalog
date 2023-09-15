import { Route, Routes } from '@angular/router';
import { LayoutComponent } from './views/shared/layout/layout/layout.component';

const dialogRouterConfig: Route = {
    path: '',
    outlet: 'dialog',
    children: [
        {
            path: 'country-detail',
            loadChildren: () =>
                import(
                    './views/shared/country-catalog-dialog/country-catalog-dialog.module'
                ).then((m) => m.CountryCatalogDialogModule),
        },
    ]
};

const adminRouterConfig: Route = {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: 'finder',
            loadChildren: () =>
                import('./views/shared/finder/finder.module').then(
                    (m) => m.FinderModule
                ),
        },
    ],
};


export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'finder',
        pathMatch: 'full',
    },
    adminRouterConfig,
    dialogRouterConfig,
    {
        path: '**',
        redirectTo: 'auth/404',
    },
];
