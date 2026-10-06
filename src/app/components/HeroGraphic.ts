import { Component } from '@angular/core';
import { Icon } from '../components/Icon';

@Component({
  selector: 'app-hero-graphic',
  standalone: true,
  imports: [Icon],
  template: `
    <div class="relative min-h-[570px] rounded-[190px_12px_190px_12px] max-lg:ml-10 max-lg:min-h-[500px] max-sm:ml-[18px] max-sm:min-h-[390px] max-sm:rounded-[100px_8px_100px_8px] [&>img]:h-[570px] [&>img]:w-full [&>img]:rounded-[inherit] [&>img]:object-cover [&>img]:saturate-[.72] max-lg:[&>img]:h-[500px] max-sm:[&>img]:h-[390px]">
      <img
        src="https://images.unsplash.com/photo-1609679604891-f69f884eddae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=86&w=1200"
        alt="Elegant London residential property"
      />
      <div class="absolute inset-0 rounded-[inherit] bg-[linear-gradient(20deg,rgba(23,37,90,.45),transparent_50%)]"></div>
      <div class="absolute bottom-[72px] -left-11 flex items-center gap-3.5 rounded-xl bg-white px-[18px] py-[15px] shadow-[0_20px_50px_rgba(23,37,90,.22)] [&_strong]:block [&_strong]:font-[Manrope] [&_strong]:text-[13px] [&_span]:block max-sm:bottom-[34px] max-sm:-left-[18px] max-sm:p-[11px]">
        <app-icon>✓</app-icon>
        <div>
          <strong>Property compliant</strong>
          <span>Inspected & documented</span>
        </div>
      </div>
      <div class="absolute top-[55px] -right-7 flex items-center gap-3.5 rounded-xl bg-[#17255A] px-[18px] py-[15px] text-white shadow-[0_20px_50px_rgba(23,37,90,.22)] [&>span]:text-[38px] [&>span]:font-bold [&_strong]:block [&_small]:block [&_small]:text-white/60 max-sm:top-7 max-sm:-right-1.5 max-sm:p-[11px] max-sm:[&>span]:text-[28px]">
        <span>33</span>
        <div>
          <strong>London boroughs</strong>
          <small>plus M25 coverage</small>
        </div>
      </div>
      <div class="absolute right-6 bottom-3.5 text-[9px] text-white/70 max-sm:hidden">
        Photo: Brad Starkey / Unsplash
      </div>
    </div>
  `
})
export class HeroGraphic {}