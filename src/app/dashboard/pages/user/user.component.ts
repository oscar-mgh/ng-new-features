import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <title-component [texto]="titleLabel()" isItalic />

    @if (user()) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />
      <div>
        <h3 class="text-xl mt-4">First Name: {{ this.user()?.first_name }}</h3>
        <h3 class="text-xl">Last Name: {{ this.user()?.last_name }}</h3>
        <p class="text-xl">Email: {{ email() }}</p>
      </div>
    </section>
    } @else {
    <p class="text-3xl">Cargando ...</p>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public titleLabel = computed<string>(() => {
    if (this.user()) {
      return `Informacion del usuario ${this.user()?.first_name} ${
        this.user()?.last_name
      }`;
    }
    return 'Informacion del usuario';
  });
  public email = computed(() => this.user()?.email);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal<User>(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  // constructor() {
  //   this.route.params.subscribe((params) => console.log(params));
  // }
}
