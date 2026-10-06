import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PHONE, PHONE_LINK, WHATSAPP, servicesdata } from '../../data/site';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
readonly PHONE = PHONE;
  readonly PHONE_LINK = PHONE_LINK;
  readonly WHATSAPP = WHATSAPP;
  readonly services = servicesdata;

  // Mobile navigation state
  open = signal(false);

  // Services dropdown state
  dropdownOpen = signal(false);

  toggleMenu(): void {
    this.open.update((prev) => !prev);
  }

  showDropdown(): void {
    this.dropdownOpen.set(true);
  }

  hideDropdown(): void {
    this.dropdownOpen.set(false);
  }

  // Closes both mobile navigation and active dropdowns
  closeMenu(): void {
    this.open.set(false);
    this.dropdownOpen.set(false);
  }
}
