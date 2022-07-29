import { Component } from "@angular/core"; 
import { CoursesService } from "./courses.service";

// Decorator class --  Component  
@Component({
    selector:  'courses', // <div class="courses"> -- ".courses"
    template: `
        <h2> {{ getTitle() }} </h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
}) 

export class CoursesComponent {
    title = "List of courses";
    courses;

    getTitle() {
        return this.title
    } 

    // logic for callling api

    constructor(service: CoursesService) {
        // let service = new CoursesService();        
        this.courses = service.getCourses();
    }

}