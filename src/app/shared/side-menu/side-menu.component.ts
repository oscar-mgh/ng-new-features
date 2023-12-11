import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { MenuItemComponent } from '@shared/menu-item/menu-item.component';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));
}
