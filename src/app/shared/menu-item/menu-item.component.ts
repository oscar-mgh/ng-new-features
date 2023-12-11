import { Component, Input } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'menu-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-item.component.html',
  styles: ``,
})
export class MenuItemComponent {
  @Input()
  item?: Route;
}
