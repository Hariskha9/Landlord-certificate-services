import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (isExternal) {
      <a
        [href]="to"
        [class]="className"
        [target]="isHttp ? '_blank' : null"
        rel="noreferrer"
        (click)="handleClick($event)"
      >
        <ng-content />
      </a>
    } @else {
      <a
        [routerLink]="to"
        [class]="className"
        (click)="handleClick($event)"
      >
        <ng-content />
      </a>
    }
  `
})
export class Link {
  @Input({ required: true }) to!: string;
  @Input() className: string = '';
  @Output() linkClick = new EventEmitter<MouseEvent>();

  private router = inject(Router);

  get isExternal(): boolean {
    return (
      this.to.startsWith('http') ||
      this.to.startsWith('tel:') ||
      this.to.startsWith('https://wa.me')
    );
  }

  get isHttp(): boolean {
    return this.to.startsWith('http');
  }

  handleClick(event: MouseEvent): void {
    this.linkClick.emit(event);

    if (!this.isExternal && this.to.startsWith('/')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}