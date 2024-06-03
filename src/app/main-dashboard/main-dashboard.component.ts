import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  @Input() selectedSite: any;
  toolStatus: { [key: string]: boolean } = {};

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
