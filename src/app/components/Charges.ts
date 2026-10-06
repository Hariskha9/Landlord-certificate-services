import { Component } from '@angular/core';
import { Icon } from './Icon';

@Component({
  selector: 'app-charges',
  standalone: true,
  imports: [Icon],
  template: `
    <div class="mt-6 grid grid-cols-2 gap-3 max-sm:grid-cols-1 [&>div]:flex [&>div]:items-center [&>div]:gap-3.5 [&>div]:rounded-md [&>div]:border [&>div]:border-[#DCE3E5] [&>div]:bg-[#F4F7F5] [&>div]:p-4 [&_span]:text-[11px] [&_span]:text-[#65708C] [&_b]:block [&_b]:text-xs [&_b]:text-[#17255A]">
      <div>
        <app-icon>P</app-icon>
        <span>
          <b>Parking</b>£5 where paid parking is required.
        </span>
      </div>
      <div>
        <app-icon>C</app-icon>
        <span>
          <b>Congestion Zone</b>£18 where applicable.
        </span>
      </div>
    </div>
  `
})
export class Charges {}