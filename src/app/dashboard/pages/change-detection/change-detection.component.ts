import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <title-component [texto]="currentFramework()" isItalic />
    <pre class="text-2xl font-sans">{{ framework() | json }}</pre>
    <pre class="text-2xl font-sans">{{ frameworkprop | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public framework = signal({
    name: 'Svelte',
    releaseDate: 2016,
  });

  public frameworkprop = {
    name: 'Vue',
    releaseDate: 2014,
  };

  public currentFramework = computed(
    () => `Change detection - ${this.framework().name}`
  );

  constructor() {
    setTimeout(() => {
      // this.frameworkprop.name = 'Svelte';
      this.framework.update((value) => ({
        ...value,
        name: 'Angular',
      }));
    }, 1400);
  }
}
