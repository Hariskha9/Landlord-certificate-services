import { Component } from '@angular/core';
import { servicesdata } from '../../data/site';
import { Service } from '../service/service';

@Component({
  selector: 'app-fire-safety-certificates',
  imports: [Service],
  templateUrl: './fire-safety-certificates.html',
  styleUrl: './fire-safety-certificates.css',
})
export class FireSafetyCertificates {
      readonly service = servicesdata[2];

}
