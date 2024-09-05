import { Component, ElementRef } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-sidebaruser',
    templateUrl: './app.sidebaruser.component.html'
})
export class AppSidebarUserComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

