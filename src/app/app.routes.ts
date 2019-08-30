import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';

import { PostfachComponentComponent } from './postfach-component/postfach-component.component';
import { HonorarkontoComponent } from './honorarkonto/honorarkonto.component';
import { HonorarbestandComponent } from './honorarbestand/honorarbestand.component';
import { NeuehonorarComponent } from './neuehonorar/neuehonorar.component';

export const routes: Routes = [
    {path: '', component: DashboardDemoComponent},
    {path: 'postfach', component: PostfachComponentComponent},
    {path: 'honorarkonto', component: HonorarkontoComponent},
    {path: 'honorarbestand', component: HonorarbestandComponent},
    {path: 'neuehonorarvereinbarung', component: NeuehonorarComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
