import { User } from 'src/auth/user.entity';
// import { Exclude } from 'class-transformer';
import { TaskStatus } from './task-status.enum';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
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

  @ManyToOne(() => User, (user) => user.tasks, { eager: false })
  // @Exclude({ toPlainOnly: true })
  user: User;

  @Column()
  userId: number;
}
