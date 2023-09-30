import { TaskStatus } from './task-status.enum';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('tasks')
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
