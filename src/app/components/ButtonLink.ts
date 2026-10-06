import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export type ButtonTone = 'primary' | 'secondary' | 'light' | 'ghost';

@Component({
  selector: 'app-button-link',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (isExternal) {
      <a
        [href]="formattedUrl"
        [target]="isOpenInNewTab ? '_blank' : null"
        rel="noreferrer"
        [class]="buttonClasses"
      >
        <ng-container *ngTemplateOutlet="buttonContent" />
      </a>
    } @else {
      <a [routerLink]="to" [class]="buttonClasses">
        <ng-container *ngTemplateOutlet="buttonContent" />
      </a>
    }

    <!-- Template ref ensures projected text renders reliably in both if & else branches -->
    <ng-template #buttonContent>
      <ng-content />
      <span aria-hidden="true">↗</span>
    </ng-template>
  `
})
export class ButtonLink {
  @Input({ required: true }) to!: string;
  @Input() tone: ButtonTone = 'primary';

  private readonly toneClasses: Record<ButtonTone, string> = {
    primary: 'bg-[#17255A] text-white',
    secondary: 'bg-[#00487C] text-white',
    light: 'bg-white text-[#17255A]',
    ghost: 'border border-[#17255A]/20 text-[#17255A]'
  };

  get isExternal(): boolean {
    if (!this.to) return false;
    return (
      this.to.startsWith('http://') ||
      this.to.startsWith('https://') ||
      this.to.startsWith('tel:') ||
      this.to.startsWith('mailto:') ||
      this.to.startsWith('whatsapp:') ||
      this.to.startsWith('wa.me') ||
      this.to.startsWith('api.whatsapp.com')
    );
  }

  get formattedUrl(): string {
    if (this.to.startsWith('wa.me') || this.to.startsWith('api.whatsapp.com')) {
      return `https://${this.to}`;
    }
    return this.to;
  }

  get isOpenInNewTab(): boolean {
    const url = this.formattedUrl;
    return url.startsWith('http://') || url.startsWith('https://');
  }

  get buttonClasses(): string {
    const base =
      'inline-flex min-h-[46px] items-center justify-center gap-[18px] rounded-md px-5 text-xs font-bold tracking-[.07em] uppercase transition hover:-translate-y-0.5';
    return `${base} ${this.toneClasses[this.tone] || this.toneClasses.primary}`;
  }
}