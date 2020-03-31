import { ElianeHomeComponent } from './eliane-home/eliane-home.component';
import { ElianeFamiliaComponent } from './eliane-familia/eliane-familia.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ElianeCriminalComponent } from './eliane-criminal/eliane-criminal.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: 'familia', component: ElianeFamiliaComponent },
    { path: 'criminal', component: ElianeCriminalComponent },
    { path: '', component: ElianeHomeComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);