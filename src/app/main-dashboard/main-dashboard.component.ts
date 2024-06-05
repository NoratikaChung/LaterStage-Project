import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteDataService } from '../site-data.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  @Input() selectedSite: any;
  toolStatus: { [key: string]: boolean } = {};

  setData(data: any[], siteName: string): void {
    this.selectedSite = data.find((site: { name: string }) => site.name === siteName);
  }

  constructor(private route: ActivatedRoute, private siteDataService: SiteDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const siteName = params.get('siteName');
      console.log('Route param siteName:', siteName);  // Log the siteName parameter
      this.siteDataService.getSitesData().subscribe(data => {
        this.selectedSite = data.sites.find((site: { name: string }) => site.name === siteName);
        console.log('Selected site data:', this.selectedSite);  // Log the selected site data
      });
    });
  }

  toggleLine(line: any): void {
    line.isOpen = !line.isOpen;
  }

  startTool(tool: string): void {
    this.toolStatus[tool] = true;
    console.log(`${tool} started`);
  }

  stopTool(tool: string): void {
    this.toolStatus[tool] = false;
    console.log(`${tool} stopped`);
  }

  restartTool(tool: string): void {
    this.toolStatus[tool] = false;
    console.log(`${tool} restarted (stopped)`);
    setTimeout(() => {
      this.toolStatus[tool] = true;
      console.log(`${tool} restarted (started)`);
    }, 1000); // Simulate restart delay
  }
}
