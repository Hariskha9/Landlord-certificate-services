import { Component } from '@angular/core';
import { servicesdata } from '../../data/site';
import { Service } from '../service/service';

@Component({
  selector: 'app-electrical-certificates',
  imports: [Service],
  templateUrl: './electrical-certificates.html',
  styleUrl: './electrical-certificates.css',
})
export class ElectricalCertificates {
  readonly service = servicesdata[0];
}
