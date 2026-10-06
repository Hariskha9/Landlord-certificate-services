import { Component } from '@angular/core';
import { servicesdata } from '../../data/site';
import { Service } from '../service/service';

@Component({
  selector: 'app-fire-doors-protection-page',
  imports: [Service],
  templateUrl: './fire-doors-protection-page.html',
  styleUrl: './fire-doors-protection-page.css',
})
export class FireDoorsProtectionPage {
        readonly service = servicesdata[7];

}
