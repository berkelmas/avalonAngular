import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';

import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';


export const routes: Routes = [
    {path: '', component: DashboardDemoComponent},
    {path: 'empty', component: EmptyDemoComponent},
    {path: 'charts', component: ChartsDemoComponent},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
