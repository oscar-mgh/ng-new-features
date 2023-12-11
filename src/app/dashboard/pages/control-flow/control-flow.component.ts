import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal<boolean>(false);
  public grade = signal<Grade>('B');
  public languages = signal(['Go', 'Javascript', 'C#', 'Python', 'Java']);
  public languages2 = signal([]);

  toggleContent() {
    this.showContent.update((prev) => !prev);
  }
}
