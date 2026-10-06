import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PHONE_LINK, WHATSAPP } from '../data/site';

@Component({
  selector: 'app-mobile-bar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="fixed right-0 bottom-0 left-0 z-[60] hidden h-[58px] grid-cols-3 bg-[#17255A] text-white shadow-[0_-8px_20px_rgba(23,37,90,.14)] max-sm:grid [&_a]:grid [&_a]:place-items-center [&_a]:border-r [&_a]:border-white/20 [&_a]:text-[10px] [&_a]:font-bold [&_a]:tracking-[.09em] [&_a]:uppercase [&_a:nth-child(2)]:bg-[#00487C]">
      <a [href]="PHONE_LINK">Call</a>
      <a [href]="WHATSAPP" target="_blank" rel="noreferrer">WhatsApp</a>
      <a routerLink="/contact">Book</a>
    </div>
  `
})
export class MobileBar {
  readonly PHONE_LINK = PHONE_LINK;
  readonly WHATSAPP = WHATSAPP;
}