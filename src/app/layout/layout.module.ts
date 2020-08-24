import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MainContentComponent} from './main-content/main-content.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, MainContentComponent],
  imports: [
    SharedModule
  ],
  exports: [
    MainContentComponent
  ]
})
export class LayoutModule { }
