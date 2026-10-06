import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eyebrow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="mb-6 flex items-center gap-2.5 text-[11px] font-bold tracking-[.15em] uppercase"
      [ngClass]="light ? 'text-white/70' : 'text-[#00487C]'"
    >
      <span class="h-px w-7 bg-current"></span>
      <ng-content />
    </div>
  `
})
export class Eyebrow {
  @Input() light: boolean = false;
}