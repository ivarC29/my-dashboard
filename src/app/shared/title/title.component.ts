import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ CommonModule ],
  template:`
    <h1 class="text-3xl mb-5"
    [ngStyle]="withShadow ? {'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)'} : {}">{{ value }}</h1>
  `,
})
export class TitleComponent {

  @Input({ required: true }) public value!: string;
  @Input({ transform: booleanAttribute }) withShadow:boolean = false;

}
