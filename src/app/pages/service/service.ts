import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { servicesdata, WHATSAPP } from '../../data/site';
import { ButtonLink } from '../../components/ButtonLink';
import { Eyebrow } from '../../components/Eyebrow';
import { SectionHeading } from '../../components/SectionHeading';
import { Charges } from '../../components/Charges';
import { ConversionBand } from '../../components/ConversionBand';
import { WhatsappHelp } from '../../components/WhatsAppHelp';

@Component({
  selector: 'app-service',
  imports: [
    CommonModule,
    ButtonLink,
    Eyebrow,
    SectionHeading,
    Charges,
    ConversionBand,
  ],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {
  @Input({ required: true }) service: any = servicesdata;

  readonly WHATSAPP = WHATSAPP;

  get conversionTitle(): string {
    const article = this.service.short === 'EPC' ? 'an' : 'a';
    return `Need ${article} ${this.service.short} service?`;
  }
}
