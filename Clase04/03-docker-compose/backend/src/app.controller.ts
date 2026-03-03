import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Course } from './courses/course.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCourses(): Promise<Course[]> {
    return this.appService.findAllCourses();
  }

  @Get('/health')
  healthCheck(): string {
    return 'OK';
  }
}
