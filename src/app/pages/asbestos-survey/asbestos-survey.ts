import { Component } from '@angular/core';
import { servicesdata } from '../../data/site';
import { Service } from '../service/service';

@Component({
  selector: 'app-asbestos-survey',
  imports: [Service],
  templateUrl: './asbestos-survey.html',
  styleUrl: './asbestos-survey.css',
})
export class AsbestosSurvey {
    readonly service = servicesdata[5];

}
