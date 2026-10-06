import { Component } from '@angular/core';
import { servicesdata } from '../../data/site';
import { Service } from '../service/service';

@Component({
  selector: 'app-epc',
  imports: [Service],
  templateUrl: './epc.html',
  styleUrl: './epc.css',
})
export class Epc {
      readonly service = servicesdata[4];

}
