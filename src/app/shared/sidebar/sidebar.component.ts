import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  public menuItems: any[];

  constructor(private sidebarService: SidebarService) {
    this.menuItems = this.sidebarService.menu;
  }
}
