import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'view-transition-page-1',
  standalone: true,
  imports: [ CommonModule, TitleComponent ],
  template: `
    <app-title value="View Transition 1" withShadow />

    <section class="flex justify-start">

      <img
        srcset="https://picsum.photos/id/235/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div
        class="bg-blue-400 w-56 h-56"
        style="view-transition-name: hero2"
        >

      </div>


    </section>

  `,
})
export default class ViewTransitionComponent {

}
