import 'reflect-metadata';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
/**
  Employee entity representing an employee in the database
*/

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'varchar' })
  profession: string;

  @Column({ type: 'varchar' })
  color: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'varchar' })
  branch: string;

  @Column({ type: 'boolean' })
  assigned: boolean;
}
