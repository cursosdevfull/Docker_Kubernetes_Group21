import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ length: 100 })
  instructor: string;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  price: number;

  @Column({ type: 'int', comment: 'Duration in hours' })
  duration: number;

  @Column({ length: 50 })
  level: string;

  @Column({ length: 80 })
  category: string;

  @Column({ length: 255, nullable: true })
  imageUrl: string;

  @CreateDateColumn()
  createdAt: Date;
}
