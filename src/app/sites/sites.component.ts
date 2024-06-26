import { Component } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  selectedSite: any;

  onSiteSelected(site: any): void {
    this.selectedSite = site;
  }
}
