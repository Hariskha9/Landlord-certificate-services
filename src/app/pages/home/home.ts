import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { servicesdata, WHATSAPP } from '../../data/site';
import { Eyebrow } from '../../components/Eyebrow';
import { ButtonLink } from '../../components/ButtonLink';
import { HeroGraphic } from '../../components/HeroGraphic';
import { SectionHeading} from '../../components/SectionHeading';
import { Icon} from '../../components/Icon';
import { Coverage} from '../../components/Coverage';
import { ConversionBand} from '../../components/ConversionBand';


@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    Eyebrow,
    ButtonLink,
    HeroGraphic,
    SectionHeading,
    Icon,
    Coverage,
    ConversionBand,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  readonly services = servicesdata;
  readonly WHATSAPP = WHATSAPP;

  // Features list for "Why Choose Us" section
  readonly reasons = [
    [
      '01',
      'Professional',
      'Inspection, testing and certification services.',
    ],
    [
      '02',
      'London-wide',
      'Every London borough, City of London and the M25.',
    ],
    [
      '03',
      'Clear pricing',
      'Published rates and charges shown before booking.',
    ],
    [
      '04',
      'Easy booking',
      'Book online, call, or message us on WhatsApp.',
    ],
  ] as const;

  // Steps list for "How It Works" section
  readonly steps = [
    'Choose your service',
    'Book your visit',
    'Property visit',
    'Inspection & testing',
    'Documentation',
  ] as const;

  /**
   * Helper to format step indices into two-digit strings (e.g. 0 -> "01")
   */
  formatStepNumber(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
