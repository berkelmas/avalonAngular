import {Component, Inject, forwardRef} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div style="background-color : white; padding: 10px; opacity : 50%;" class="layout-footer">
            <span class="footer-text-left">
                <img style="height: 35px;" src="assets/honorarimages/honorar-konzept-logo.jpg" />
            </span>
            <span class="footer-text-right">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
            </span>
        </div>
    `
})
export class AppFooterComponent {

}
