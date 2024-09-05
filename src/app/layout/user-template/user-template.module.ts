import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from '../app.menu.component';
import { AppMenuitemComponent } from '../app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from '../app.topbar.component';
import { AppFooterComponent } from '../app.footer.component';
import { AppConfigModule } from '../config/config.module';
import { AppSidebarComponent } from "../app.sidebar.component";
import { AppLayoutComponent } from "../app.layout.component";
import { UserTemplateComponent } from './user-template.component';
import { AppTopBarUserComponent } from '../app.topbaruser.component ';
import { AppFooterUserComponent } from '../app.footeruser.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { AppMenuitemUserComponent } from '../app.menuitemuser.component';
import { AppSidebarUserComponent } from '../app.sidebaruser.component';


@NgModule({
  declarations: [ 
    AppTopBarUserComponent,
    UserTemplateComponent,
    AppFooterUserComponent,
    UserMenuComponent,
    AppMenuitemUserComponent,
    AppSidebarUserComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    AppConfigModule
  ],

})
export class UserTemplateModule { }
