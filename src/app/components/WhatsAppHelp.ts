import { Component } from '@angular/core';
import { PHONE, WHATSAPP } from '../data/site';
import { Eyebrow } from './Eyebrow';
import { ButtonLink } from './ButtonLink';

@Component({
  selector: 'app-whatsapp-help',
  standalone: true,
  imports: [Eyebrow, ButtonLink],
  template: `
    <section class="bg-[#00487C] py-[72px] text-white">
      <div class="mx-auto w-[min(1180px,calc(100%-48px))] max-lg:max-w-[760px] max-sm:w-[calc(100%-28px)] flex items-end justify-between gap-10 max-sm:flex-col max-sm:items-start [&_h2]:mb-2.5 [&_p]:m-0 [&_p]:text-white/70 [&>div:last-child]:text-right max-sm:[&>div:last-child]:w-full max-sm:[&>div:last-child]:text-left">
        <div>
          <app-eyebrow [light]="true">Not sure what to book?</app-eyebrow>
          <h2>Tell us about your property.</h2>
          <p>Message us on WhatsApp and we’ll help you choose the right service.</p>
        </div>
        <div class="flex flex-col gap-2">
          <strong>{{ PHONE }}</strong>
          <app-button-link [to]="WHATSAPP" tone="light">
            WhatsApp us
          </app-button-link>
        </div>
      </div>
    </section>
  `
})
export class WhatsappHelp {
  readonly PHONE = PHONE;
  readonly WHATSAPP = WHATSAPP;
}