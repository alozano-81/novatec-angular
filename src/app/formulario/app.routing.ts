import { RouterModule, Routes } from '@angular/router';
import { VariosComponent } from './varios/varios.component';

const appRoutes = [
    { path: 'ver-formulario',
      component: VariosComponent,
      pathMatch: 'full'  
    }
];
export const routing = RouterModule.forRoot(appRoutes);