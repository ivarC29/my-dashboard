import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'F' | '';

@Component({
  selector: 'control-flow-page',
  standalone: true,
  imports: [ TitleComponent ],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal( ['Angular', 'Vue', 'Svelte', 'Qwik', 'React'] );
  public frameworks2 = signal( [] );

  public toggleContent() {
    this.showContent.update( value => !value );
  }

  public changeGrade() {
    const randomIndex = Math.floor(Math.random() * 5);
    const randomGrade: Grade = ['A', 'B', 'C', 'F', ''][randomIndex] as Grade;
    this.grade.update( value => randomGrade);
  }

}
