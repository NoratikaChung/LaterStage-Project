import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-recover-mat-qty',
  templateUrl: './recover-mat-qty.component.html',
  styleUrls: ['./recover-mat-qty.component.css']
})
export class RecoverMatQtyComponent implements OnInit {
  sites: any[] = [];
  selectedSite: any;
  kitStepId: string = '';
  materialSerialNumber: string = '';
  quantity: number | null = null;

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
      kitStepId: this.kitStepId,
      materialSerialNumber: this.materialSerialNumber,
      quantity: this.quantity
    });
  }

  reset(): void {
    this.selectedSite = null;
    this.kitStepId = '';
    this.materialSerialNumber = '';
    this.quantity = null;
  }
}
