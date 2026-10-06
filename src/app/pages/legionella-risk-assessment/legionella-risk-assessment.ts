import { Component } from '@angular/core';
import { servicesdata } from '../../data/site';
import { Service } from '../service/service';
@Component({
  selector: 'app-legionella-risk-assessment',
  imports: [Service],
  templateUrl: './legionella-risk-assessment.html',
  styleUrl: './legionella-risk-assessment.css',
})
export class LegionellaRiskAssessment {
        readonly service = servicesdata[6];

}
