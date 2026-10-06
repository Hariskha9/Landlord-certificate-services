import { Component, Input } from '@angular/core';
import { PHONE, PHONE_LINK } from '../data/site';
import { Eyebrow } from '../components/Eyebrow';
import { ButtonLink } from '../components/ButtonLink';

@Component({
  selector: 'app-conversion-band',
  standalone: true,
  imports: [Eyebrow, ButtonLink],
  template: `
    <section class="bg-white py-[82px]">
      <div class="mx-auto w-[min(1180px,calc(100%-48px))] max-lg:max-w-[760px] max-sm:w-[calc(100%-28px)] flex items-center justify-between gap-12 max-sm:flex-col max-sm:items-start [&_h2]:mb-3 [&_h2]:text-[#17255A] [&_p]:m-0 [&_p]:text-[#65708C]">
        <div>
          <app-eyebrow>Ready when you are</app-eyebrow>
          <h2>{{ title }}</h2>
          <p>{{ copy }}</p>
        </div>
        <div class="text-right max-sm:w-full max-sm:text-left">
          <a [href]="PHONE_LINK" class="mb-4 block font-[Manrope] text-2xl font-bold text-[#17255A]">
            {{ PHONE }}
          </a>
          <div class="flex flex-wrap gap-2.5 max-sm:[&>a]:flex-1">
            <app-button-link [to]="PHONE_LINK" tone="secondary">
              Call now
            </app-button-link>
            <app-button-link to="/contact">Get a quote</app-button-link>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ConversionBand {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) copy!: string;

  readonly PHONE = PHONE;
  readonly PHONE_LINK = PHONE_LINK;
}