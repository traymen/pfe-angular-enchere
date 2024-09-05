import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-footeruser',
    templateUrl: './app.footeruser.component.html'
})
export class AppFooterUserComponent {
    constructor(public layoutService: LayoutService) { }
}
