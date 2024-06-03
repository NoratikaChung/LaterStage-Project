import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedSite: any;

  onSiteSelected(site: any): void {
    this.selectedSite = site;
  }
}
