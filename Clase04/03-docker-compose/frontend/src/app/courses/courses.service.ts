import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { endpoint } from '../environment';
import { Course } from './course.model';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private readonly http = inject(HttpClient);

  readonly courses = toSignal(this.http.get<Course[]>(endpoint), {
    initialValue: [],
  });
}
