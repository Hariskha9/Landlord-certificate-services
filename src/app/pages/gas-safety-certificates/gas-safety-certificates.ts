import { Component } from '@angular/core';
import { servicesdata } from '../../data/site';
import { Service } from '../service/service';

@Component({
  selector: 'app-gas-safety-certificates',
  imports: [Service],
  templateUrl: './gas-safety-certificates.html',
  styleUrl: './gas-safety-certificates.css',
})
export class GasSafetyCertificates {
    readonly service = servicesdata[1];

}
