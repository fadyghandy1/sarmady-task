import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'errors',
        loadChildren: () =>
          import('./features/errors/errors.routes').then((m) => m.errorsRoutes),
      },
   
      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products.routes').then(
            (m) => m.productsRoutes,
          ),
        data: { title: 'PRODUCTS' },
      },
   
    ],
  },
  { path: '**', redirectTo: '/errors/404' },
];
