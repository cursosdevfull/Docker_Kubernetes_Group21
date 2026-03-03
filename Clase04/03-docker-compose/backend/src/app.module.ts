import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Course } from './courses/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT ?? '3306'),
      username: process.env.DB_USER ?? 'user',
      password: process.env.DB_PASSWORD ?? '12345',
      database: process.env.DB_NAME ?? 'course',
      entities: [Course],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Course]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
