import { Component } from '@angular/core';
import { boroughs } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

@Component({
  selector: 'app-coverage',
  standalone: true,
  imports: [SectionHeading],
  template: `
    <section class="py-28 max-sm:py-[74px] bg-[#17255A] text-white">
      <div class="mx-auto w-[min(1180px,calc(100%-48px))] max-lg:max-w-[760px] max-sm:w-[calc(100%-28px)] grid grid-cols-[.75fr_1.25fr] gap-[90px] max-lg:grid-cols-1 max-lg:gap-6 [&_.section-heading_h2]:text-white [&_.section-heading_p]:text-white/60">
        <div>
          <app-section-heading
            eyebrow="Service area"
            title="All of London. And beyond."
            copy="We cover all 32 London boroughs, the City of London and properties throughout the M25."
          />
          <div class="flex gap-2 [&_span]:rounded-sm [&_span]:border [&_span]:border-white/20 [&_span]:px-3 [&_span]:py-2.5 [&_span]:text-[10px] [&_span]:tracking-[.08em] [&_span]:uppercase">
            <span>33 London areas</span>
            <span>M25 coverage</span>
          </div>
        </div>
        <div class="grid grid-cols-3 content-center max-sm:grid-cols-2 [&_span]:border-b [&_span]:border-white/10 [&_span]:px-3 [&_span]:py-2 [&_span]:text-[11px] [&_span]:text-white/70 max-sm:[&_span]:px-1.5 max-sm:[&_span]:text-[9px]">
          @for (borough of boroughs; track borough) {
            <span>{{ borough }}</span>
          }
        </div>
      </div>
    </section>
  `
})
export class Coverage {
  readonly boroughs = boroughs;
}