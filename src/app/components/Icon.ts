import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <span class="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-[#00487C] font-[Manrope] text-[11px] font-extrabold text-white">
      <ng-content />
    </span>
  `
})
export class Icon {}