import { Expose } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'test-instances' })
export class InstanceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @Column()
  user_id: number;

  @Expose()
  @Column('varchar', { length: 255 })
  instance_name: string;

  @Expose()
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @Expose()
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column()
  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
