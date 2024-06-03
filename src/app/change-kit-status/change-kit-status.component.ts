import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-change-kit-status',
  templateUrl: './change-kit-status.component.html',
  styleUrls: ['./change-kit-status.component.css']
})
export class ChangeKitStatusComponent implements OnInit {
  sites: any[] = [];
  selectedSite: any;
  kitStepId: string = '';

  constructor(private siteDataService: SiteDataService) { }

  ngOnInit(): void {
    this.siteDataService.getSitesData().subscribe(data => {
      this.sites = data.sites;
    });
  }

  submit(): void {
    // Handle the submit action here
    console.log('Submitted:', {
      selectedSite: this.selectedSite,
      kitStepId: this.kitStepId
    });
  }

  reset(): void {
    this.selectedSite = null;
    this.kitStepId = '';
  }
}
