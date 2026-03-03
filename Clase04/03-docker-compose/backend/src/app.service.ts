import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './courses/course.entity';
import { COURSES_SEED } from './courses/courses.seed';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async onModuleInit(): Promise<void> {
    const count = await this.courseRepository.count();
    if (count === 0) {
      await this.courseRepository.save(COURSES_SEED);
      this.logger.log(
        `Seeded ${COURSES_SEED.length} courses into the database.`,
      );
    }
  }

  findAllCourses(): Promise<Course[]> {
    return this.courseRepository.find();
  }
}
