import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PHONE, PHONE_LINK, WHATSAPP } from '../../data/site';
import { ButtonLink } from '../../components/ButtonLink';
import { Charges } from '../../components/Charges';
import { Eyebrow } from '../../components/Eyebrow';
import { FormField } from '../../components/FormField';
import { Icon } from '../../components/Icon';
import { WhatsappHelp } from '../../components/WhatsAppHelp';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ButtonLink,
    Charges,
    Eyebrow,
    FormField,
    Icon,
    WhatsappHelp
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly PHONE = PHONE;
  readonly PHONE_LINK = PHONE_LINK;
  readonly WHATSAPP = WHATSAPP;

  readonly sent = signal(false);

  readonly propertyTypeOptions = [
    'Residential',
    'Commercial',
    'HMO',
    'Flat',
    'House',
    'Office',
    'Shop',
    'Other'
  ];

  readonly serviceOptions = [
    'Residential EICR',
    'Commercial EICR',
    'PAT Testing',
    'Emergency Lighting',
    'Electrical Installation',
    'Fuse Box Installation',
    'Residential Gas CP12',
    'Commercial Gas CP42',
    'Fire Safety Certificate',
    'Fire Risk Assessment',
    'EPC',
    'Asbestos Survey',
    'Legionella Risk Assessment',
    'Fire Door Certificate',
    'Fire Door Installation',
    'Fire Alarm Installation',
    'Other'
  ];

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    this.sent.set(true);
  }
}
