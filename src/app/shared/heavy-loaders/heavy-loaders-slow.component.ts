import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'heavy-loader-slow',
  imports: [CommonModule],
  styles: ``,
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">Heavy loader slow</section>
  `,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;


  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}

    console.log('Charged')
  }
}
