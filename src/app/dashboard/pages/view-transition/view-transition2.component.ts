import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <title-component texto="View Transition 2" isItalic />
    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div
        class="fixed mx-3 bottom-16 bg-green-600 w-32 h-32 rounded"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTransition2Component {}
