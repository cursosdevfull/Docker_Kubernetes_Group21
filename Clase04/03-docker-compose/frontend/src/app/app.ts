import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CoursesService } from './courses/courses.service';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly coursesService = inject(CoursesService);

  protected readonly courses = this.coursesService.courses;
}
