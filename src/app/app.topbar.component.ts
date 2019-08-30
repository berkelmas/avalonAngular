import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div style="display: flex; justify-content: start; border-radius: 10px; padding: 5px;" class="topbar-left">
                <a routerLink="/"><img style="height: 44px;" src="assets/honorarimages/honorar-konzept-logo.jpg" class="topbar-logo custom-logo" /></a>
            </div>

            <div class="topbar-right">
                <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)"
                   [ngClass]="{'menu-button-rotate': app.rotateMenuButton}">
                    <i class="fa fa-angle-left"></i>
               </a>

            </div>
        </div>
    `
})
export class AppTopBarComponent {

    constructor(public app: AppComponent) {}

}
