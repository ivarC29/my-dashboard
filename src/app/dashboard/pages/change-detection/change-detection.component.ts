import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'change-detection-page',
  standalone: true,
  imports: [ CommonModule, TitleComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [value]="currentFramework()" withShadow />

    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>

  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseYear: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseYear: 2016,
  };

  constructor() {

    setTimeout(() => {

      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }));

    }, 3000);


  }

}
