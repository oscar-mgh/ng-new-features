import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'heavy-loader-fast',
  imports: [CommonModule],
  styles: ``,
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content />
    </section>
  `,
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass!: string;

  constructor( ){
    console.log("Heavy loader fast created!")
  }
}
