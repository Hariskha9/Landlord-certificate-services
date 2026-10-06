import { Component, Input } from '@angular/core';
import { Eyebrow } from '../components/Eyebrow';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [Eyebrow],
  template: `
    <div
      class="section-heading mb-[50px] max-w-[690px] [&_h2]:mb-[18px] [&_h2]:text-[#17255A] [&_p]:max-w-[590px] [&_p]:text-[#65708C]"
      [class.mx-auto]="center"
      [class.text-center]="center"
      [class.[&>div]:justify-center]="center"
      [class.[&_p]:mx-auto]="center"
    >
      <app-eyebrow>{{ eyebrow }}</app-eyebrow>
      <h2>{{ title }}</h2>
      @if (copy) {
        <p>{{ copy }}</p>
      }
    </div>
  `
})
export class SectionHeading {
  @Input({ required: true }) eyebrow!: string;
  @Input({ required: true }) title!: string;
  @Input() copy?: string;
  @Input() center: boolean = false;
}