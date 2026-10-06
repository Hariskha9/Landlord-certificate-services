import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PHONE, PHONE_LINK, servicesdata } from '../../data/site';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly PHONE = PHONE;
  readonly PHONE_LINK = PHONE_LINK;
  
  // Splitting services to match the React slice behavior (0..5 and 5+)
  readonly primaryServices = servicesdata.slice(0, 5);
  readonly secondaryServices = servicesdata.slice(5);
}
