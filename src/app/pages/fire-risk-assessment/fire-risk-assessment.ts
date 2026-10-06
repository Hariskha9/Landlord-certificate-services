import { Component } from '@angular/core';
import { servicesdata } from '../../data/site';
import { Service } from '../service/service';

@Component({
  selector: 'app-fire-risk-assessment',
  imports: [Service],
  templateUrl: './fire-risk-assessment.html',
  styleUrl: './fire-risk-assessment.css',
})
export class FireRiskAssessment {
      readonly service = servicesdata[3];

}
