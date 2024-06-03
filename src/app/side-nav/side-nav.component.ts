import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  sites: any[] = [];
  @Output() siteSelected = new EventEmitter<any>();

  constructor(private siteDataService: SiteDataService) { }

  ngOnInit(): void {
    this.siteDataService.getSitesData().subscribe(data => {
      this.sites = data.sites;
    });
  }

  selectSite(site: any): void {
    this.siteSelected.emit(site);
  }
}
