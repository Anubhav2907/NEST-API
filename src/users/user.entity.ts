/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  firstName: number;
  @ApiProperty()
  @Column()
  lastName: number;
}
