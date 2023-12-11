import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  standalone: true,
  selector: 'title-component',
  imports: [],
  template: `
    <h1 class="text-4xl mx-2 mt-2 mb-9" [class]="{ italic }">
      {{ text }}
    </h1>
  `,
  styles: ``,
})
export class TitleComponent {
  @Input({ required: true, alias: 'texto' })
  text!: string;
  @Input({ alias: 'isItalic', transform: booleanAttribute })
  italic: boolean = false;
}
