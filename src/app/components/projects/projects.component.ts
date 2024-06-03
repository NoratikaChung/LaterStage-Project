import { Component } from "@angular/core";


@Component ({
    selector: 'app-projects', 
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
    // title = "Hi I am learning Angular!";
    // description = "pls look at my progress";
    // logoSrc = "/assets/logo.jpg";

    // channel = {
    //     title: "Hi I am learning Angular!",
    //     description: "pls look at my progress",
    //     logoSrc: "/assets/logo.jpg"
    // }

    // disabled: boolean = true;
    // isSubscribed: boolean = false;

    // onSubscribeClick(data: any) {
    //     console.log(data)
    //     this.isSubscribed = !this.isSubscribed
    // }

    isOpen = false;

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
}