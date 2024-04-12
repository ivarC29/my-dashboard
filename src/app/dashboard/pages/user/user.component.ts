import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'

import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { map, switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';


@Component({
  selector: 'user-page',
  standalone: true,
  imports: [ TitleComponent ],
  template: `
<app-title [value]="titleLabel()" withShadow />

<div class="max-w-md mx-auto bg-gray-200 rounded-lg overflow-hidden shadow-lg">
  @if (user()) {
    <div class="px-6 py-4">

      <div class="flex items-center justify-center mb-4">
        <img
          [srcset]="user()!.avatar"
          [alt]="user()!.first_name"
          class="rounded-full w-32 h-32"
        >
      </div>

      <div class="text-center mb-4">
        <h2 class="text-xl font-bold">{{ user()!.first_name }} {{ user()!.last_name }}</h2>
        <p class="text-gray-600">{{ user()!.email }}</p>
      </div>

    </div>
  } @else {
    <div class="px-6 py-4">
      <div class="animate-pulse flex items-center">
        <div class="rounded-full h-32 w-32 bg-gray-200 mr-4"></div>
        <div>
          <div class="h-4 bg-gray-200 w-24 mb-2"></div>
          <div class="h-4 bg-gray-200 w-16"></div>
        </div>
      </div>
    </div>
  }
</div>


  `,
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );
  // public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById( id ))
    )
  )

  public titleLabel = computed( () => {

    if ( this.user() ) {
      return `User ${this.user()?.first_name} ${this.user()?.last_name}`;
    }

    return 'User info';

  } );
  // constructor() {
  //   console.log( this.route.params );
  // }

}
